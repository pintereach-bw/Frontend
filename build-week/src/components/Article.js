import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions";
import { withRouter } from "react-router-dom";

class Article extends Component {
  componentDidMount() {
    // this.props.getArticles();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.summary}</p>
        <a href={this.props.link} />
        <p>{this.props.category}</p>
        <img src={this.props.image} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  articles: state.articles
});

export default withRouter(
  connect(
    mapStateToProps,
    { getArticles }
  )(Article)
);

const card = {
  display: "flex",
  flexFlow: "column wrap",
  width: "500px",
  height: "500px"
};

const imgStyle = {
  height: "500px",
  width: "500px"
};
