import axiosClient from "api/axiosClient";
import firebase from "firebase/app";
import db from "db/firestore";

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

export const fetchChannels = () =>
  db.collection("channels").get().then(extractSnapshotData);

export const createChannel = (channel: any) =>
  db
    .collection("channels")
    .add(channel)
    .then((docRef) => docRef.id);

export const subscribeToChannel = (channelId: string, onSubsribe: any) =>
  db
    .collection("channels")
    .doc(channelId)
    .onSnapshot((snapshot) => {
      const channel = { id: snapshot.id, ...snapshot.data() };
      onSubsribe(channel);
    });

export const subscribeToProfile = (uid: string, onSubsribe: any) =>
  db
    .collection("profiles")
    .doc(uid)
    .onSnapshot((snapshot) => onSubsribe(snapshot.data()));

export const joinChannel = async (userId: string, channelId: string) => {
  const userRef = db.doc(`profiles/${userId}`);
  const channelRef = db.doc(`channels/${channelId}`);
  await userRef.update({
    joinedChannels: firebase.firestore.FieldValue.arrayUnion(channelRef),
  });

  await channelRef.update({
    joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef),
  });
};

export const sendChannelMessage = (message: any, channelId: any) =>
  db
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .doc(message.timestamp)
    .set(message);

export const subscribeToMessages = (channelId: any, onSubsribe: any) =>
  db
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .onSnapshot((snapshot) => onSubsribe(snapshot.docChanges()));
