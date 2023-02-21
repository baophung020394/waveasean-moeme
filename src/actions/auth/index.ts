import * as api from "api/auth";
import { Auth } from "models/auth";
import { setUser } from "services/TokenService";

export const login = (formData: Auth) => (dispatch: any) => {
  dispatch({
    type: "AUTH_LOGIN_INIT",
  });
  return api
    .login(formData)
    .then((user) => {
      setUser(user);
      console.log("user login", user);
      return dispatch({
        type: "AUTH_LOGIN_SUCCESS",
        user,
      });
    })
    .catch((error) => {
      console.log({ error });
      dispatch({
        type: "AUTH_LOGIN_ERROR",
        error: { message: error.message },
      });
      logout();
    });
};

export const registerUser =
  (formData: any, profile: any) => (dispatch: any) => {
    console.log({ formData });
    dispatch({
      type: "AUTH_REGISTER_INIT",
    });
    return api
      .createUser(formData, profile)
      .then(() => {
        console.log("user register success");
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({ type: "AUTH_REGISTER_ERROR", error });
        logout();
      });
  };

// export const loginFirebase = (formData: any) => (dispatch: any) => {
//   dispatch({
//     type: "AUTH_LOGIN_FIREBASE_INIT",
//   });
//   return api
//     .login(formData)
//     .then((user) =>
//       dispatch({
//         type: "AUTH_LOGIN_FIREBASE_SUCCESS",
//         user,
//       })
//     )
//     .catch((error) => dispatch({ type: "AUTH_LOGIN_FIREBASE_ERROR", error }));
// };

export const logout = () => (dispatch: any) =>
  api.logout().then((_) => {
    dispatch({ type: "AUTH_LOGOUT_SUCCESS" });
    dispatch({ type: "CHATS_FETCH_RESTART" });
  });

export const listenToAuthChanges = () => (dispatch: any) => {
  dispatch({ type: "AUTH_ON_INIT" });

  return api.onAuthStateChanges(async (authUser: any) => {
    console.log("authUser", authUser);
    // const user = JSON.parse(localStorage.getItem("_profile"));

    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid);
      console.log({ userProfile });
      dispatch({
        type: "AUTH_ON_SUCCESS",
        user: userProfile === undefined ? authUser : userProfile,
      });
      console.log(`we are authenticated`);
    } else {
      dispatch({ type: "AUTH_ON_ERROR" });
      console.log(`we are NOT authenticated`);
    }
  });
};
