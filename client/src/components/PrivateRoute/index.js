import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!!userState.token) return <Component {...props} />;
        else
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
      }}
    ></Route>
  );
};

export default PrivateRoute;
