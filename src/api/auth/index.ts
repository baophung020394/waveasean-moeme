import axiosClient from "api/axiosClient";
import { Auth } from "models/auth";
import { removeUser, setUser } from "services/TokenService";
import db from "db/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { v4 as uuidv4 } from "uuid";
// Create collection profiles
const createUserProfile = (userProfile: any) =>
  db.firestore().collection("profiles").doc(userProfile.uid).set(userProfile);

const extractSnapshotData = (snapshot: any) =>
  snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));

export const fetchUsers = () =>
  db.firestore().collection("profiles").get().then(extractSnapshotData);

export const getUserProfile = (uid: string) =>
  db
    .firestore()
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
  let myuuid = uuidv4();

  const resLogin: any = await axiosClient.post(url, JSON.stringify(data));

  setUser(resLogin);

  const dataFirebase = { ...resLogin };

  console.log({ resLogin });
  if (resLogin?.result === "user not found") {
    dataFirebase.email = `${data.params.userId}@gmail.com`;
    dataFirebase.password = `${data.params.userPassword}56`;
  } else {
    console.log("user ton tai");
    dataFirebase.email = `${data.params.userId}@gmail.com`;
    dataFirebase.password = `${data.params.userPassword}56`;

    // const listUsers = await fetchUsers();

    // const dupUser = listUsers.filter(
    //   (user: any) => user.email === dataFirebase.email
    // );

    // console.log({ dupUser });
    // const { user } = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(
    //     dataFirebase.email,
    //     dataFirebase.password
    //   );

    // console.log({ user });

    // const userProfileRegister: any = {
    //   userId: data.params.userId || userId,
    //   uid: user.uid || myuuid,
    //   username: data.params.userId || userId,
    //   email: dataFirebase.email,
    //   avatar: resLogin?.params.profile_image || "",
    //   atk: resLogin?.params.atk || myuuid,
    //   rtk: resLogin?.params.rtk || myuuid,
    //   joinedChannels: [],
    // };

    // await createUserProfile(userProfileRegister);
    // await createUser(userProfileRegister);

    // if (dupUser.length > 0) {
    //   console.log("dupUser");
    //   const loginFireBaseRes = await loginFirebase(dataFirebase);
    //   return loginFireBaseRes;
    // }

    const loginFireBaseRes = await loginFirebase(dataFirebase);
    return loginFireBaseRes;
  }
};

export const loginFirebase = async ({ email, password }: any) => {
  console.log("email", email);
  console.log("password", password);
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const userProfile = await getUserProfile(user.uid);
  console.log({ userProfile });
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

export const register = async ({ userId, userPassword }: Auth) => {
  let myuuid = uuidv4();

  const dataFirebase = {
    email: "",
    password: "",
  };
  dataFirebase.email = `${userId}@gmail.com`;
  dataFirebase.password = `${userPassword}`;

  // const listUsers = await fetchUsers();

  // const dupUser = listUsers.filter(
  //   (user: any) => user.email === dataFirebase.email
  // );

  // if (dupUser.length > 0) {
  //   const loginFireBaseRes = await loginFirebase(dataFirebase);
  //   return loginFireBaseRes;
  // }

  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(dataFirebase.email, dataFirebase.password);

  const userProfileRegister: any = {
    userId: userId,
    uid: user.uid,
    username: userId,
    email: dataFirebase.email,
    avatar: "",
    atk: myuuid,
    rtk: myuuid,
    joinedChannels: [],
  };
  await createUserProfile(userProfileRegister);
  await createUser(userProfileRegister);
  const loginFireBaseRes = await loginFirebase(dataFirebase);
  return loginFireBaseRes;
};

/** Test auth 2 */
export const createUser = (userProfileRegister: any) => {
  console.log({ userProfileRegister });
  return db
    .database()
    .ref("users")
    .child(userProfileRegister.uid)
    .set(userProfileRegister)
    .then((user) => console.log("saved user", user))
    .catch((err) => console.log("err", err));
};
