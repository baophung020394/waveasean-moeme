import { getUserProfile } from "api/auth";
import * as api from "api/channel";
import db from "db/firestore";

export const getChannelList = (userId: string) => (dispatch: any) => {
  console.log({userId})
  dispatch({
    type: "CHANNEL_ON_INIT",
  });
  return api
    .getListChannel(userId)
    .then((channel) => {
      return dispatch({
        type: "CHANNEL_ON_SUCCESS",
        channel,
      });
    })
    .catch((error) => dispatch({ type: "CHANNEL_ON_ERROR", error }));
};

export const fetchChannels = () => async (dispatch: any, getState: any) => {
  const { user } = getState().auth;

  dispatch({ type: "CHANNELS_FETCH_INIT" });
  const channels: any = await api.fetchChannels();
  channels?.forEach(
    (channel: any) =>
      (channel.joinedUsers = channel?.joinedUsers?.map((user: any) => user.id))
  );

  const sortedChannels = channels?.reduce(
    (accuChannels: any, channel: any) => {
      if (user) {
        accuChannels[
          channel?.joinedUsers.includes(user && user.uid)
            ? "joined"
            : "available"
        ].push(channel);
      }
      return accuChannels;
    },
    { joined: [], available: [] }
  );

  dispatch({
    type: "CHANNELS_FETCH_SUCCESS",
    ...sortedChannels,
  });

  return sortedChannels;
};

export const fetchChannelsCompare = () => async (dispatch: any) => {
  const channelsCompare: any = await api.fetchChannels();
  dispatch({ type: "CHANNELS_COMPARE_FETCH_SUCCESS", channelsCompare });
  return channelsCompare;
};

export const subscribeToChannel = (channelId: string) => (dispatch: any) =>
  api.subscribeToChannel(channelId, async (channel: any) => {
    const joinedUsers = await Promise.all(
      channel?.joinedUsers.map(async (userRef: any) => {
        const userSnapshot = await userRef.get();
        return userSnapshot.data();
      })
    );

    channel.joinedUsers = joinedUsers;
    dispatch({ type: "CHANNELS_SET_ACTIVE_CHANNEL", channel });
  });

export const joinChannel = (channel: any, uid: string) => (dispatch: any) => {
  console.log("join channel", channel);
  return api.joinChannel(uid, channel?.id).then((channelId) => {
    dispatch({ type: "CHANNELS_JOIN_SUCCESS", channel });
  });
};

export const subscribeToProfile =
  (uid: string, channelId: string) => (dispatch: any) =>
    api.subscribeToProfile(uid, (user: any) => {
      dispatch({ type: "CHANNELS_UPDATE_USER_STATE", user, channelId });
    });

export const createChannel =
  (formData: any, userId: any) => async (dispatch: any) => {
    const newChannel = { ...formData };

    newChannel.admin = db.doc(`profiles/${userId}`);
    const channelId = await api.createChannel(newChannel);
    dispatch({ type: "CHANNELS_CREATE_SUCCESS" });
    await api.joinChannel(userId, channelId);
    dispatch({
      type: "CHANNELS_JOIN_SUCCESS",
      channel: { ...newChannel, id: channelId },
    });
    return channelId;
  };

export const sendChannelMessage =
  (message: any, channelId: string) => (dispatch: any, getState: any) => {
    const newMessage = { ...message };
    console.log({ newMessage });
    const { user } = getState().auth;

    const userRef = db.doc(`profiles/${user.uid}`);
    newMessage.author = userRef;

    return api
      .sendChannelMessage(newMessage, channelId)
      .then((_) => dispatch({ type: "CHANNELS_MESSAGE_SENT" }));
  };

export const subscribeToMessages = (channelId: string) => (dispatch: any) => {
  return api.subscribeToMessages(channelId, async (changes: any) => {
    const messages = changes.map((change: any) => {
      if (change.type === "added") {
        return { id: change.doc.id, ...change.doc.data() };
      }
    });

    const messageWithAuthor = [];
    const cache: any = {};

    for await (let message of messages) {
      if (cache[message.author.id]) {
        message.author = cache[message.author.id];
      } else {
        const userSnapshot = await message.author.get();
        cache[userSnapshot.id] = userSnapshot.data();
        message.author = cache[userSnapshot.id];
      }
      messageWithAuthor.push(message);
    }
    return dispatch({ type: "CHANNELS_SET_MESSAGES", messages, channelId });
  });
};

export const registerMessageSubscription = (
  channelId: any,
  messageSub: any
) => ({
  type: "CHANNELS_REGISTER_MESSAGE_SUB",
  sub: messageSub,
  channelId,
});
