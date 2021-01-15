import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../redux/actions/userAction";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  LogoText,
  RightContainer,
  UserInfo,
  LogoutButton,
} from "./style";

import ClipLoader from "react-spinners/ClipLoader";

const Header = () => {
  const noteState = useSelector((state) => state.note);
  const labelState = useSelector((state) => state.label);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loggedInAs, setLoggedInAs] = useState("");

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    var decoded = jwt_decode(userState.token);
    setLoggedInAs(decoded.email);
  }, [setLoggedInAs, userState.token]);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Logo"
        />
        <LogoText>Keep</LogoText>
      </LogoContainer>
      <RightContainer>
        <ClipLoader
          color={"#fff"}
          loading={noteState.loading || labelState.loading}
          size={30}
        />
        <UserInfo>{loggedInAs}</UserInfo>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
