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

  const storageRef = firebase.storage().ref();
  const messageRef = firebase.database().ref("messages");
  const [messagesState, setMessagesState] = useState([]);
  const [searchTermState, setSearchTermState] = useState("");
  const currentChannel = useSelector(({ channel }) => channel?.currentChannel);
  // useEffect(() => {
  //   const unsubFromChannel = dispatch(subscribeToChannel(id));

  //   if (!messageSubs) {
  //     const unsubFromMessages = dispatch(subscribeToMessages(id));
  //     dispatch(registerMessageSubscription(id, unsubFromMessages));
  //   }

  //   return () => {
  //     unsubFromChannel();
  //     unsubFromJoinedUsers();
  //   };
  // }, [id]);

  // useEffect(() => {
  //   joinedUsers && subscribeToJoinedUsers(joinedUsers);
  // }, [joinedUsers]);

  // const subscribeToJoinedUsers = useCallback(
  //   (JUsers) => {
  //     JUsers.forEach((user: any) => {
  //       if (!peopleWatchers.current[user.uid]) {
  //         peopleWatchers.current[user.uid] = dispatch(
  //           subscribeToProfile(user.uid, id)
  //         );
  //       }
  //     });
  //   },
  //   [dispatch, id]
  // );

  // const unsubFromJoinedUsers = useCallback(() => {
  //   Object.keys(peopleWatchers.current).forEach((id) =>
  //     peopleWatchers.current[id]()
  //   );
  // }, [peopleWatchers.current]);

  const sendMessage = useCallback(
    (message) => {
      dispatch(sendChannelMessage2(message, id));
    },
    [id]
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
          dispatch(sendChannelMessage2(newData, id));
        });
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    if (id) {
      setMessagesState([]);
      messageRef.child(id).on("child_added", (snap) => {
        setMessagesState((currentState: any) => {
          let updateState = [...currentState];
          updateState.push(snap.val());
          return updateState;
        });
      });

      return () => messageRef.child(id).off();
    }
  }, [id]);

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
    // const messages = messagesState.reduce((acc, message) => {
    //   console.log("messsge reduce", message);
    //   if (
    //     (message.content && message.content?.match(regex)) ||
    //     message.author.username?.match(regex)
    //   ) {
    //     acc.push(message);
    //   }
    //   return acc;
    // }, []);

    return messages;
  };

  // if (!activeChannel?.id) {
  //   return <LoadingView message="Loading Chat..." />;
  // }

  return (
    <ChatStyled className="chat--view">
      <div className="chat--view__channels">
        <ChannelList joinedChannels={joinedChannels} />
      </div>
      <div className="chat--view__content">
        <ChatBar
          channel={currentChannel}
          uniqueuUsers={uniqueuUsersCount()}
          searchTermChange={searchTermChange}
        />
        <div className="chat--view__content__chat">
          <ChatMessageList
            messages={
              searchTermState ? filterMessageBySearchTerm() : messagesState
            }
          />
          <div className="chat--view__content__options">
            {currentChannel?.enableWriteMsg === "1" && (
              <ChatOptions submitStock={sendMessage} />
            )}
          </div>
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
