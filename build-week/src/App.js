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
import ArticleForm from "./components/ArticleForm"
import Article from "./components/Article";
import ArticleListView from "./components/ArticleListView";

function App() {
  return (
    <div style={mainDiv}>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Login} />
      <Route exact path="/addarticle" component={ArticleForm} />
      <PrivateRouter exact path="/articles" component={ArticleListView} />
    </div>
  );
}

export default withRouter(App);

const mainDiv = {
  display: "flex"
};
