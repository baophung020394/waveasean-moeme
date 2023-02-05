import { listenToConnectionChanges } from "actions/app";
import LoadingView from "components/Spinner/LoadingView";
import Chat from "layouts/Chat";
import ChannelView from "layouts/Channel";
import HomeView from "layouts/Home";
import LoginView from "layouts/Login";
import ProfileView from "layouts/Profile";
import SettingsView from "layouts/Settings";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { getAccessToken } from "services/TokenService";
import StoreProvider from "store/StoreProvider";
import styled from "styled-components";
import Header from "./components/common/Header";
import { listenToAuthChanges } from "actions/auth";
import { checkUserConnection } from "actions/connection";
import Test from "layouts/Test";

function AuthRoute({ children, ...rest }: any) {
  const token = getAccessToken();
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

const ContentWrapper = ({ children }: any) => (
  <div className="content-page">{children}</div>
);

function MoeMe() {
  const dispatch: any = useDispatch();
  const isOnline = useSelector(({ app }) => app.isOnline);
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());

    return () => {
      unsubFromAuth();
      unsubFromConnection();
    };
  }, [dispatch]);

  // useEffect(() => {
  //   let unsubFromUserConnection: any;
  //   if (user?.uid) {
  //     unsubFromUserConnection = dispatch(checkUserConnection(user.uid));
  //   }

  //   return () => {
  //     unsubFromUserConnection && unsubFromUserConnection();
  //   };
  // }, [dispatch, user]);

  if (!isOnline) {
    return (
      <LoadingView message="MoeMe has been disconnected from the internet. Please reconnect...." />
    );
  }

  if (isChecking) {
    return <LoadingView />;
  }

  return (
    <Router>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/login">
            <LoginView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/channel">
            <ChannelView />
          </AuthRoute>
          <AuthRoute exact path="/channel-detail/:id">
            <ChannelView />
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