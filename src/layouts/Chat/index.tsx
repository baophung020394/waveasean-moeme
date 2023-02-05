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
  registerMessageSubscription,
  sendChannelMessage,
  subscribeToChannel,
  subscribeToMessages,
  subscribeToProfile,
} from "actions/channel";

interface ChatProps {}

function Chat({}: ChatProps) {
  // const [messageList, setMessageList] = useState<any>(
  //   JSON.parse(localStorage.getItem("_messages"))
  // );
  const dispatch: any = useDispatch();
  const { id }: any = useParams();
  const peopleWatchers: any = useRef({});
  const activeChannel = useSelector(
    ({ channel }) => channel.activeChannels[id]
  );
  const messages = useSelector(({ channel }) => channel.messages[id]);
  const messageSubs = useSelector(({ channel }) => channel.messageSubs[id]);

  const messageListRef = useRef<any>({});
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
  }, []);

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
      console.log({ message });
      dispatch(sendChannelMessage(message, id)).then((_: any) =>
        messageListRef.current.scrollIntoView(false)
      );
    },
    [id]
  );

  useEffect(() => {
    if (messages) {
      messageListRef.current.scrollIntoView(false);
    }
  }, [messages?.length]);

  return (
    <>
      <ChatStyled className="chat--view">
        <ChatBar channel={activeChannel} />
        <ChatMessageList innerRef={messageListRef} messages={messages} />
        <ChatOptions submitStock={sendMessage} />
        <Messanger onSubmit={sendMessage} />
      </ChatStyled>
    </>
  );
}

const ChatStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

export default Chat;
