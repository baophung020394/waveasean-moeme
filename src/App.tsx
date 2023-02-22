import { listenToConnectionChanges } from "actions/app";
import { listenToAuthChanges } from "actions/auth";
import PrivateChat from "components/PrivateChat";
import LoadingView from "components/Spinner/LoadingView";
import RegisterView from "layouts/Register";
import ChannelView from "layouts/Channel";
import ChatView from "layouts/Chat";
import HomeView from "layouts/Home";
import LoginView from "layouts/Login";
import PrivateView from "layouts/Private";
import ProfileView from "layouts/Profile";
import SettingsView from "layouts/Settings";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import StoreProvider from "store/StoreProvider";
import styled from "styled-components";
import Header from "./components/common/Header";
import PushNotification from "components/PushNotification";
import firebase, { messaging } from "db/firestore";
import { getToken } from "firebase/messaging";

export const AuthRoute = ({ children, ...rest }: any) => {
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  // console.log({ user });
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          props?.match.params.id &&
          localStorage.getItem("urlCopy")?.length > 0
        ) {
          return React.cloneElement(onlyChild, { ...rest, ...props });
        } else {
          return user ? (
            React.cloneElement(onlyChild, { ...rest, ...props })
          ) : (
            <Redirect to="/login" />
          );
        }
      }}
    />
  );
};

const ContentWrapper = ({ children }: any) => (
  <div className="content-page">{children}</div>
);

function MoeMe() {
  const dispatch: any = useDispatch();
  const isOnline = useSelector(({ app }) => app.isOnline);
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BHQ0O7j9_SRP-uAwDv6p1_B0o-Thwt5SMhMD74sAbbVsfYmeCFZNzfhV6GikSsXhDacUz7arpskzaAqNRteoyJM",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }
  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());

    return () => {
      unsubFromAuth();
      unsubFromConnection();
    };
  }, [dispatch]);

  if (!isOnline) {
    return (
      <LoadingView message="MoeMe has been disconnected from the internet. Please reconnect...." />
    );
  }

  if (isChecking) {
    return <LoadingView message="Load app..." />;
  }

  return (
    <Router>
      <Header />
      {/* <PushNotification /> */}
      <ContentWrapper>
        <Switch>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/channel">
            <ChannelView />
          </AuthRoute>
          <AuthRoute path="/channel-detail/:id">
            <ChatView />
          </AuthRoute>
          <AuthRoute path="/private">
            <PrivateView />
          </AuthRoute>
          <AuthRoute path="/private-detail/:id">
            <PrivateChat />
          </AuthRoute>
          <AuthRoute path="/profile">
            <ProfileView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
          <Redirect path="*" to="/login" />
        </Switch>
      </ContentWrapper>
    </Router>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MoeMe />
    </StoreProvider>
  );
}

const ContentWrapperCSS = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 56px;
`;
