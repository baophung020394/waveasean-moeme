import { logout } from "actions/auth";
import Button from "components/common/Header/Button";
import { withBaseLayout } from "layouts/Base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { styled } from "utils/styled-component";

function Settings() {
  const dispatch: any = useDispatch();
  const user = useSelector(({ auth }) => auth?.logout?.user);
  const history = useHistory();

  return (
    <SettingsStyled>
      <h1>Settings page</h1>
      <Button
        type="button"
        name="logout"
        className="btn-login"
        inputColor="primary"
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Logout
      </Button>
    </SettingsStyled>
  );
}

const SettingsStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default withBaseLayout(Settings);
