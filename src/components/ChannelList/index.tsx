import {
  getChannelList,
  createChannel,
  fetchChannels,
  fetchChannelsCompare,
} from "actions/channel";
import CardChannel from "components/CardChannel";
import LoadingView from "components/Spinner/LoadingView";
import Title from "components/Title";
import { Channel } from "models/channel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser } from "services/TokenService";
import styled from "styled-components";

interface ChannelListProps {
  joinedChannels: any;
}

function ChannelList({ joinedChannels }: ChannelListProps) {
  const isChecking = useSelector(({ channel }) => channel.isChecking);

  if (isChecking) {
    return <LoadingView />;
  }

  return (
    <ChannelListStyled className="channel-list">
      <Title name="Channel" />
      <div className="card--container">
        {joinedChannels?.length > 0 &&
          joinedChannels
            // ?.filter(
            //   (channel: any) =>
            //     (channel?.room_type === "2" || channel?.room_type === "3") &&
            //     channel?.ownserId !== user.uid
            // )
            ?.map((channel: Channel, index: number) => {
              return (
                <CardChannel
                  channel={channel}
                  key={`${channel?.room_name}-${index}`}
                />
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
