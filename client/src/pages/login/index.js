import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "../../redux/actions/networkHelper/axios";

import {
  Wrapper,
  FormContainer,
  Title,
  Form,
  Input,
  Button,
  Message,
  Error,
} from "./style";

import { authenticateUser } from "../../redux/actions/userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    // Wake up server on load
    axios.get("/");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(event.target["email"].value);
  };

  const registerUser = (email) => {
    dispatch(authenticateUser({ email }));
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Input name="email" id="email" placeholder="Email" />
          <Button type="submit">Login</Button>
          <Message>
            You won't be sent any verification. Feel free to use a disposable
            email address.
          </Message>
          {userState.error && <Error>{userState.error}</Error>}

          <ClipLoader color={"#fff"} loading={userState.loading} size={30} />
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default LoginPage;
