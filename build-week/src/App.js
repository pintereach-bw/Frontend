import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import Article from "./components/Article";

function App() {
  return (
    <div style={mainDiv}>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Login} />
      <PrivateRouter exact path="/article" component={Article} />
    </div>
  );
}

export default withRouter(App);

const mainDiv = {
  display: "flex"
};
