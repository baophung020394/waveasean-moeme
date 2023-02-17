import { sendChatMessage } from "actions/chat";
import ChatBar from "components/ChatBar";
import ChatMessageList from "components/ChatMessageList";
import ChatOptions from "components/ChatOptions";
import Messanger from "components/Messanger";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  clearNotifications,
  registerMessageSubscription,
  sendChannelMessage,
  sendChannelMessage2,
  subscribeToChannel,
  subscribeToMessages,
  subscribeToProfile,
} from "actions/channel";
import LoadingView from "components/Spinner/LoadingView";
import ChannelList from "components/ChannelList";
import { withBaseLayout } from "layouts/Base";
import firebase from "db/firestore";

interface PrivateChatProps {
  user?: any;
}

function PrivateChat({ user }: PrivateChatProps) {
  const dispatch: any = useDispatch();
  const currentChannel = useSelector(({ channel }) => channel.currentChannel);
  const storageRef = firebase.storage().ref();
  const messageRef = firebase.database().ref("messages");
  const [messagesState, setMessagesState] = useState([]);
  const [searchTermState, setSearchTermState] = useState("");

  console.log({ user });
  const sendMessage = useCallback(
    (message) => {
      console.log({ message });
      dispatch(sendChannelMessage2(message, user?.id));
    },
    [user?.id]
  );

  const uploadImage = (data: any) => {
    let newData = { ...data };
    const filePath = `chat/images/${newData.idMessage}.png`;
    storageRef
      .child(filePath)
      .put(newData.files, { contentType: newData?.metadata.type })
      .then((data) => {
        data.ref.getDownloadURL().then((url: string) => {
          newData.image = url;
          dispatch(sendChannelMessage2(newData, user?.id));
        });
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    if (user?.id) {
      setMessagesState([]);
      messageRef.child(user?.id).on("child_added", (snap) => {
        setMessagesState((currentState: any) => {
          let updateState = [...currentState];
          updateState.push(snap.val());
          return updateState;
        });
      });

      return () => messageRef.child(user?.id).off();
    }
  }, [user?.id]);

  const uniqueuUsersCount = () => {
    const uniqueuUsers = messagesState.reduce((acc, message) => {
      if (!acc.includes(message?.author.username)) {
        acc.push(message?.author.username);
      }
      return acc;
    }, []);

    return uniqueuUsers.length;
  };

  const searchTermChange = (searchTerm: any) => {
    setSearchTermState(searchTerm);
  };

  const filterMessageBySearchTerm = () => {
    // const regex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    // const regex = new RegExp(searchTermState, "gi");
    const messages = messagesState.filter(
      (message) =>
        message.content.toLowerCase().includes(searchTermState.toLowerCase()) ||
        message.author.username
          .toLowerCase()
          .includes(searchTermState.toLowerCase())
    );

    return messages;
  };

  //   if (!activeChannel?.id) {
  //     return <LoadingView message="Loading Chat..." />;
  //   }

  return (
    <ChatStyled className="chat--view">
      <div className="chat--view__content">
        <ChatBar
          channel={user}
          uniqueuUsers={uniqueuUsersCount()}
          searchTermChange={searchTermChange}
        />
        <div className="chat--view__content__chat">
          <ChatMessageList
            messages={
              searchTermState ? filterMessageBySearchTerm() : messagesState
            }
          />
          {/* <div className="chat--view__content__options">
            {activeChannel?.enableWriteMsg === "1" && (
              <ChatOptions submitStock={sendMessage} />
            )}
          </div> */}
          <Messanger
            onSubmit={sendMessage}
            channel={currentChannel}
            uploadImage={uploadImage}
          />
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

export default PrivateChat;
