import {
  fetchChannels,
  fetchUnreads,
  setNotification,
  setCurrentChannel,
  subscribeNotificationToMessages,
  registerMessageSubscription,
  getNotifications,
} from "actions/channel";
import { registerChannelsJoinedSubscription } from "actions/channel";
import { subscribeToChannel, updateUnreadMess } from "actions/channel";
import CardChannel from "components/CardChannel";
import LoadingView from "components/Spinner/LoadingView";
import Title from "components/Title";
import { Channel } from "models/channel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import db, { Timestamp } from "db/firestore";

import CardChannelList from "components/CardChannelList";
import { createTimestamp } from "utils/time";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/database";

interface ChannelListProps {
  joinedChannels: any;
}

function ChannelList({ joinedChannels }: ChannelListProps) {
  const [channel, setChannel] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch: any = useDispatch();
  const isChecking = useSelector(({ channel }) => channel.isChecking);
  const user = useSelector(({ auth }) => auth.user);
  const notificationsChnl = useSelector(({ channel }) => channel.notifications);
  const messageSubsNotifications = useSelector(
    ({ channel }) => channel.messageSubsNotifications
  );

  const setFirstChannel = () => {
    const firstChannel = joinedChannels[0];
    if (firstLoad && joinedChannels.length > 0) {
      setChannel(firstChannel);
      dispatch(setCurrentChannel(firstChannel));
    }
    setFirstLoad(false);
  };

  const setLastVisited = async (user: any, channel: any) => {
    console.log({ user });
    const lastVisited = db
      .firestore()
      .collection("profiles")
      .doc(user.uid)
      .collection("lastVisited")
      .doc(channel?.id);
    // .collection("joinedChannels")
    // .doc(channel?.id);

    lastVisited.set({
      lastVisited: firebase.firestore.FieldValue.arrayUnion(
        Timestamp.now().toMillis().toString()
      ),
    });
    // await lastVisited.update({
    //   `${channel?.id}`: firebase.firestore.FieldValue.arrayUnion(
    //     Timestamp.now().toMillis().toString()
    //   ),
    // });
  };

  useEffect(() => {
    dispatch(fetchUnreads());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (joinedChannels.length > 0) {
      setFirstChannel();

      joinedChannels.forEach((chnl: any) => {
        const unsubFromChannel = dispatch(
          subscribeNotificationToMessages(
            chnl?.id,
            channel?.id,
            notificationsChnl
          )
        );

        if (!messageSubsNotifications) {
          const unsubFromMessages = dispatch(
            subscribeNotificationToMessages(
              chnl?.id,
              channel?.id,
              notificationsChnl
            )
          );
          dispatch(registerMessageSubscription(chnl?.id, unsubFromMessages));
        }

        return () => {
          unsubFromChannel();
        };
      });
    }
  }, [joinedChannels, channel?.id]);

  if (isChecking) {
    return <LoadingView message="Load channels...." />;
  }

  return (
    <ChannelListStyled className="channel-list">
      <Title name="Channels joined" />
      <div className="card--container">
        {joinedChannels?.length > 0 &&
          joinedChannels?.map((channel: Channel, index: number) => {
            return (
              <>
                <CardChannelList
                  channel={channel}
                  key={`${channel?.room_name}-${index}`}
                  setChannel={setChannel}
                  notifications={notificationsChnl}
                  setLastVisited={setLastVisited}
                />
              </>
            );
          })}
      </div>
    </ChannelListStyled>
  );
}

const ChannelListStyled = styled.div`
  height: 100%;

  .card--container {
    padding: 10px;
    height: calc(100% - 91px);
    overflow-y: auto;

    /* width */
    &::-webkit-scrollbar {
      width: 8px;
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 20px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    &:hover {
      &::-webkit-scrollbar {
        display: unset;
      }
    }
  }
`;
export default ChannelList;
