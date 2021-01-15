import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/globalTheme";
import "./style.css";

import PrivateRoute from "./components/PrivateRoute";
import LoginRoute from "./components/LoginRoute";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <LoginRoute exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Theme>
    </Provider>
  );
}

export default App;
