import firebase from "db/firestore";
import React, { useEffect, useState } from "react";

interface NotificationProps {
  channel?: any;
  notificationChannelId: any;
  displayName: any;
  userProps: any;
}
export const Notification = ({
  channel,
  displayName,
  notificationChannelId,
  userProps,
}: NotificationProps) => {
  const messagesRef = firebase.database().ref("messages");

  const usersRef = firebase.database().ref("users");

  const [channelsVisitedState, setChannelsVisitedState] = useState<any>({});

  const [messagesTimeStampState, setMessagesTimeStampState] = useState<any>({});

  useEffect(() => {
    if (userProps) {
      usersRef
        .child(userProps.uid)
        .child("lastVisited")
        .on("value", (snap) => {
          setChannelsVisitedState(snap.val());
        });

      messagesRef.on("value", (snap) => {
        let messages = snap.val();

        let channelsId = Object.keys(messages);
        let messagesTimeStamp: any = {};
        channelsId.forEach((channelId) => {
          let channelMessageKeys: any = Object.keys(messages[channelId]);
          channelMessageKeys.reduce((agg: any, item: any) => {
            messagesTimeStamp[channelId] = [
              ...(messagesTimeStamp[channelId] || []),
            ];
            messagesTimeStamp[channelId].push(
              messages[channelId][item].timestamp
            );
          });
        });
        console.log({ messagesTimeStamp });
        setMessagesTimeStampState(messagesTimeStamp);
      });
    }
  }, [userProps]);

  const calculateNotificationCount = (channelId: string) => {
    if (
      channelsVisitedState &&
      messagesTimeStampState &&
      channel &&
      channel.id !== channelId
    ) {
      console.log("dem ne");
      let lastVisited = channelsVisitedState[channelId];

      let channelMessagesTimeStamp = messagesTimeStampState[channelId];

      if (channelMessagesTimeStamp) {
        let notificationCount = channelMessagesTimeStamp.filter(
          (timestamp: any) => !lastVisited || lastVisited < timestamp
        ).length;

        console.log({ channelMessagesTimeStamp });
        return notificationCount === 0 ? null : (
          <p className="notitext" color="red">{notificationCount}</p>
        );
      }
    }

    return null;
  };

  return <>{calculateNotificationCount(notificationChannelId)}</>;
};
