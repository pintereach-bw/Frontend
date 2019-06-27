import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions";
import { withRouter } from "react-router-dom";

class Article extends Component {
  render() {
    return (
      <div style={mainDiv}>
        <div style={card}>
          <div style={imgDiv}>
            <img src={this.props.image} style={imgStyle} />
          </div>
          <div style={wordDiv}>
            <h1>{this.props.title}</h1>
            <p>{this.props.summary}</p>
            <a href={this.props.link} />
            <p>{this.props.category}</p>
          </div>
        </div>
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

const mainDiv = {
  display: "flex",
  flexFlow: "row wrap",
};

const card = {
  display: "flex",
  flexFlow: "column wrap",
  maxWidth: "20%",
  width: "20%",
  height: "300px",
  padding: "20px"
};

const imgStyle = {
  height: "300px",
  width: "400px"
};

const imgDiv = {
  paddingRight: "20px"
};

const wordDiv = {};
