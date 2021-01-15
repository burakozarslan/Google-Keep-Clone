import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const LoginRoute = ({ component: Component, ...rest }) => {
  const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userState.token)
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        else return <Component {...props} />;
      }}
    />
  );
};

export default LoginRoute;
