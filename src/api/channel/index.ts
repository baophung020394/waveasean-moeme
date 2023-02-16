import axiosClient from "api/axiosClient";
import firebase from "firebase/compat/app";
import "firebase/database";
import db from "db/firestore";
import "firebase/compat/firestore";

export const getListChannel = (userId: string) => {
  const url = "/00040044";
  const data = {
    params: {
      userId: userId,
    },
  };

  return axiosClient.post(url, JSON.stringify(data));
};

const extractSnapshotData = (snapshot: any) =>
  snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));

export const fetchUnreads = () =>
  db.firestore().collection("messagesunread").get().then(extractSnapshotData);

export const fetchChannels = () =>
  db.firestore().collection("channels").get().then(extractSnapshotData);

export const createChannel = (channel: any) =>
  db
    .firestore()
    .collection("channels")
    .add(channel)
    .then((docRef) => docRef.id);

export const subscribeToChannel = (channelId: string, onSubsribe: any) =>
  db
    .firestore()
    .collection("channels")
    .doc(channelId)
    .onSnapshot((snapshot) => {
      const channel = { id: snapshot.id, ...snapshot.data() };
      onSubsribe(channel);
    });

export const subscribeToProfile = (uid: string, onSubsribe: any) =>
  db
    .firestore()
    .collection("profiles")
    .doc(uid)
    .onSnapshot((snapshot) => onSubsribe(snapshot.data()));

export const joinChannel = async (userId: string, channelId: string) => {
  const userRef = db.firestore().doc(`profiles/${userId}`);
  const channelRef = db.firestore().doc(`channels/${channelId}`);

  await userRef.update({
    joinedChannels: firebase.firestore.FieldValue.arrayUnion(channelRef),
  });

  await channelRef.update({
    joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef),
  });
};

export const sendChannelMessage = (message: any, channelId: any) => {
  return db
    .firestore()
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .doc(message.timestamp)
    .set(message);
};

export const updateUnreadMess = async (notifications: any) => {
  notifications.forEach((no: any) => {
    return db.firestore().collection("notifications").doc(no.id).set(no);
  });
};

export const subscribeToChannelsJoined = (onSubsribe: any) =>
  db
    .firestore()
    .collection("channels")
    .onSnapshot((snapshot: any) => onSubsribe(snapshot.docChanges()));

export const subscribeToMessages = (channelId: any, onSubsribe: any) =>
  db
    .firestore()
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .onSnapshot((snapshot) => onSubsribe(snapshot.docChanges()));

export const subscribeNotificationToMessages = (
  channelId: any,
  onSubsribe: any
) =>
  db
    .firestore()
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .onSnapshot((snapshot) => onSubsribe(snapshot.docChanges(), snapshot));

export const getNotifications = () =>
  db.firestore().collection("notifications").get().then(extractSnapshotData);

/** TEST new structure */

export const createChannel2 = (createChannel: any, user: any) => {
  const channelRef = db.database().ref("channels");
  const key = channelRef.push().key;

  let newChannel = { ...createChannel };

  newChannel.id = key;
  return channelRef.child(key).update(newChannel);
};

export const sendChannelMessage2 = (message: any, channelId: any) => {
  return db.database().ref("messages").child(channelId).push().set(message);
  // return db
  //   .firestore()
  //   .collection("channels")
  //   .doc(channelId)
  //   .collection("messages")
  //   .doc(message.timestamp)
  //   .set(message);
};
