import { fetchChannels, getChannelList } from "actions/channel";
import ChannelList from "components/ChannelList";
import NewChannels from "components/NewChannels";
import LoadingView from "components/Spinner/LoadingView";
import { withBaseLayout } from "layouts/Base";
import Chat from "layouts/Chat";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

interface ChannelProps {}

function Channel() {
  // const channelDetail = useSelector(({ channel }) => channel.channelDetail);
  // const { id }: any = useParams();
  const profile = JSON.parse(localStorage.getItem("_profile"));
  const joinedChannels = useSelector(({ channel }) => channel.joined);
  const availableChannels = useSelector(({ channel }) => channel.available);
  const channels = useSelector(({ channel }) => channel.channel);
  const dispatch: any = useDispatch();
  // const activeChannel = useSelector(
  //   ({ channel }) => channel.activeChannels[id]
  // );

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getChannelList(profile?.params.userId));
  }, [dispatch]);

  // useEffect(() => {
  //   if (id) {
  //     const unsubFromChannel = dispatch(subscribeToChannel(id));
  //     return () => {
  //       unsubFromChannel();
  //     };
  //   }
  // }, [id]);

  // if (isChecking) {
  //   return <LoadingView />;
  // }

  return (
    <ChannelStyled className="channel-container">
      <div className="channel-container__list">
        <ChannelList joinedChannels={joinedChannels} />
      </div>
      <NewChannels
        availableChannels={availableChannels}
        joinedChannels={joinedChannels}
        channels={channels?.length > 0 && channels}
      />
      {/* {activeChannel?.id ? (
        <Chat />
      ) : (
        <NewChannels
          availableChannels={availableChannels}
          joinedChannels={joinedChannels}
          channels={channels?.length > 0 && channels}
        />
      )} */}
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
