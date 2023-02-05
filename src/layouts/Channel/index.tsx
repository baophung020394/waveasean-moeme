import {
  fetchChannels,
  fetchChannelsCompare,
  getChannelList,
  subscribeToChannel,
} from "actions/channel";
import ChannelList from "components/ChannelList";
import NewChannels from "components/NewChannels";
import { withBaseLayout } from "layouts/Base";
import Chat from "layouts/Chat";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

interface ChannelProps {}

function Channel() {
  // const channelDetail = useSelector(({ channel }) => channel.channelDetail);
  const { id }: any = useParams();
  const user = useSelector(({ auth }) => auth.user);
  const profile = JSON.parse(localStorage.getItem("_profile"));
  const joinedChannels = useSelector(({ channel }) => channel.joined);
  const availableChannels = useSelector(({ channel }) => channel.available);
  const channels = useSelector(({ channel }) => channel.channel);
  const dispatch: any = useDispatch();
  const activeChannel = useSelector(
    ({ channel }) => channel.activeChannels[id]
  );

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getChannelList(profile?.params.userId));
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const unsubFromChannel = dispatch(subscribeToChannel(id));
      return () => {
        unsubFromChannel();
      };
    }
  }, [id]);

  // useEffect(() => {
  //   if (
  //     user &&
  //     user.uid === profile?.params.userId &&
  //     insertData === "inserted"
  //   ) {
  //     return;
  //   } else if (channels1?.length > 0 && user?.uid) {
  //     if (channelsCompare.length > 0) {
  //       const newArr = channelsCompare.concat(channels1);
  //       const filterNewArr = newArr.filter((chnl: any, idx: number) => {
  //         return (
  //           newArr.findIndex(
  //             (chnl2: any) =>
  //               chnl2.room_name === chnl.room_name &&
  //               chnl2.ownerId === chnl.ownerId
  //           ) === idx
  //         );
  //       });
  //       console.log("filterNewArr", filterNewArr);
  //       const newFilterNewArr = filterNewArr.filter(
  //         (fcnl: any, idx: number) => {
  //           return fcnl?.room_name !== channels1[idx]?.room_name;
  //         }
  //       );

  //       // const newFiterCreate = filterNewArr.filter

  //       console.log({ newFilterNewArr });

  //       for (let i = 0; i <= filterNewArr?.length; i++) {
  //         if (
  //           filterNewArr &&
  //           filterNewArr[i]?.room_name !== channels1[i]?.room_name
  //         ) {
  //           const formData = {
  //             ...filterNewArr[i],
  //             // change_name: filterNewArr[i]?.change_name,
  //             // chnl_type: filterNewArr[i]?.chnl_type,
  //             // title: filterNewArr[i]?.title,
  //             // ruid: filterNewArr[i]?.ruid,
  //             // roomId: filterNewArr[i]?.roomId,
  //             // roomComment: filterNewArr[i]?.roomComment,
  //             // room_name: filterNewArr[i]?.room_name,
  //             // room_profile_image: filterNewArr[i]?.room_profile_image,
  //             // room_reg_date: filterNewArr[i]?.room_reg_date,
  //             // room_type: filterNewArr[i]?.room_type,
  //             // ownerId: filterNewArr[i]?.ownerId,
  //             // owner_name: filterNewArr[i]?.owner_name,
  //             // profile_image: filterNewArr[i]?.profile_image,
  //             // userCount: filterNewArr[i]?.userCount,
  //             // user_reg_date: filterNewArr[i]?.user_reg_date,
  //           };
  //           // dispatch(createChannel(formData, user?.uid));
  //           localStorage.setItem("insert", "inserted");
  //         } else {
  //           dispatch(joinChannel(newFilterNewArr[i], user?.uid));
  //           localStorage.setItem("join", "joined");
  //         }
  //       }
  //     } else {
  //       console.log("con lai");
  //       for (let i = 0; i <= channels1?.length; i++) {
  //         const formData = {
  //           ...channels1[i],
  //         };
  //         dispatch(createChannel(formData, user?.uid));
  //         localStorage.setItem("insert", "inserted");
  //       }
  //     }
  //   }
  // }, [user, channels1?.length, channels]);

  return (
    <ChannelStyled className="channel-container">
      <div className="channel-container__list">
        <ChannelList joinedChannels={joinedChannels} />
      </div>
      {activeChannel ? (
        <Chat />
      ) : (
        <NewChannels
          availableChannels={availableChannels}
          joinedChannels={joinedChannels}
          channels={channels?.length > 0 && channels}
        />
      )}
    </ChannelStyled>
  );
}

const ChannelStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .channel-container {
    &__list {
      min-width: 420px;
      border-right: 1px solid #e6ecf3;
    }
  }
`;

export default withBaseLayout(Channel);
