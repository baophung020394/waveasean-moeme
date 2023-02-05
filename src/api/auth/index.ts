import axiosClient from "api/axiosClient";
import { Auth } from "models/auth";
import { removeUser, setUser } from "services/TokenService";
import db from "db/firestore";
import firebase from "firebase/app";
import "firebase/auth";

// Create collection profiles
const createUserProfile = (userProfile: any) =>
  db.collection("profiles").doc(userProfile.uid).set(userProfile);

const extractSnapshotData = (snapshot: any) =>
  snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));

export const fetchUsers = () =>
  db.collection("profiles").get().then(extractSnapshotData);

export const getUserProfile = (uid: string) =>
  db
    .collection("profiles")
    .doc(uid)
    .get()
    .then((snapshot) => snapshot.data());

export const login = async ({ userId, userPassword }: Auth) => {
  const url = "/00010001";
  const data = {
    params: {
      deviceType: "web",
      userId: userId,
      userPassword: userPassword,
    },
  };

  const resLogin: any = await axiosClient.post(url, JSON.stringify(data));
  setUser(resLogin);
  console.log({ resLogin });
  const dataFirebase = { ...resLogin };
  dataFirebase.email = `${data.params.userId}@gmail.com`;
  dataFirebase.password = `${data.params.userPassword}56`;

  const listUsers = await fetchUsers();
  console.log({ listUsers });
  const dupUser = listUsers.filter(
    (user: any) => user.email === dataFirebase.email
  );
  console.log({ dupUser });

  if (dupUser.length > 0) {
    const loginFireBaseRes = await loginFirebase(dataFirebase);
    return loginFireBaseRes;
  }

  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(dataFirebase.email, dataFirebase.password);

  const userProfileRegister: any = {
    userId: data.params.userId,
    uid: user.uid,
    username: user.uid,
    email: dataFirebase.email,
    avatar: resLogin?.params.profile_image,
    atk: resLogin?.params.atk,
    rtk: resLogin?.params.rtk,
    joinedChannels: [],
  };

  await createUserProfile(userProfileRegister);

  const loginFireBaseRes = await loginFirebase(dataFirebase);
  return loginFireBaseRes;
};

export const loginFirebase = async ({ email, password }: any) => {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  // console.log({ user });
  const userProfile = await getUserProfile(user.uid);
  // console.log({ userProfile });
  return userProfile;
};

// export const logout = () => {
//   removeUser();
// };

export const logout = () => {
  removeUser();
  return firebase.auth().signOut();
};

export const onAuthStateChanges = (onAuth: any) => {
  return firebase.auth().onAuthStateChanged(onAuth);
};
