import { sendChatMessage } from "actions/chat";
import ChatBar from "components/ChatBar";
import ChatMessageList from "components/ChatMessageList";
import ChatOptions from "components/ChatOptions";
import Messanger from "components/Messanger";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MESSAGES } from "mocks/chat";
import {
  fetchChannels,
  registerMessageSubscription,
  sendChannelMessage,
  subscribeToChannel,
  subscribeToMessages,
  subscribeToProfile,
} from "actions/channel";
import LoadingView from "components/Spinner/LoadingView";
import ChannelList from "components/ChannelList";
import { withBaseLayout } from "layouts/Base";

interface ChatProps {}

function Chat({}: ChatProps) {
  const { id }: any = useParams();
  const dispatch: any = useDispatch();
  const peopleWatchers: any = useRef({});
  const activeChannel = useSelector(
    ({ channel }) => channel.activeChannels[id]
  );
  const joinedChannels = useSelector(({ channel }) => channel.joined);
  const messages = useSelector(({ channel }) => channel.messages[id]);
  const messageSubs = useSelector(({ channel }) => channel.messageSubs[id]);
  const joinedUsers = activeChannel?.joinedUsers;

  useEffect(() => {
    const unsubFromChannel = dispatch(subscribeToChannel(id));

    if (!messageSubs) {
      const unsubFromMessages = dispatch(subscribeToMessages(id));
      dispatch(registerMessageSubscription(id, unsubFromMessages));
    }

    return () => {
      unsubFromChannel();
      unsubFromJoinedUsers();
    };
  }, [id]);

  useEffect(() => {
    joinedUsers && subscribeToJoinedUsers(joinedUsers);
  }, [joinedUsers]);

  const subscribeToJoinedUsers = useCallback(
    (JUsers) => {
      JUsers.forEach((user: any) => {
        if (!peopleWatchers.current[user.uid]) {
          peopleWatchers.current[user.uid] = dispatch(
            subscribeToProfile(user.uid, id)
          );
        }
      });
    },
    [dispatch, id]
  );

  const unsubFromJoinedUsers = useCallback(() => {
    Object.keys(peopleWatchers.current).forEach((id) =>
      peopleWatchers.current[id]()
    );
  }, [peopleWatchers.current]);

  // const sendMessage = (message: any) => {
  //   // alert(JSON.stringify(message));
  //   console.log({ message });
  //   console.log({ messageList });
  //   const prevMessage = messageList || [];

  //   const newMessage = [...prevMessage, { ...message }];
  //   localStorage.setItem("_messages", JSON.stringify(newMessage));
  //   console.log({ newMessage });

  //   // dispatch(sendChatMessage(message, id));
  //   setMessageList(newMessage);
  // };

  const sendMessage = useCallback(
    (message) => {
      dispatch(sendChannelMessage(message, id));
    },
    [id]
  );

  if (!activeChannel?.id) {
    return <LoadingView message="Loading Chat..." />;
  }

  return (
    <ChatStyled className="chat--view">
      <div className="chat--view__channels">
        <ChannelList joinedChannels={joinedChannels} />
      </div>
      <div className="chat--view__content">
        <ChatBar channel={activeChannel} />
        <div className="chat--view__content__chat">
          <ChatMessageList messages={messages} />
          <div className="chat--view__content__options">
            {activeChannel?.enableWriteMsg === "1" && (
              <ChatOptions submitStock={sendMessage} />
            )}
          </div>
          <Messanger onSubmit={sendMessage} channel={activeChannel} />
        </div>
      </div>
    </ChatStyled>
  );
}

const ChatStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .chat--view {
    &__channels {
      min-width: 420px;
      border-right: 1px solid #e6ecf3;
    }

    &__content {
      height: 100%;
      width: 100%;
      padding-bottom: 56px;

      &__chat {
        height: calc(100% - 61px);
        display: flex;
        flex-direction: column;
      }

      &__options {
        flex: 1 1 55px;
      }
    }
  }
`;

export default withBaseLayout(Chat);
