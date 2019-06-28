import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions";
import { withRouter } from "react-router-dom";
import Article from "../components/Article";

class ArticleListView extends Component {
  componentDidMount() {
    this.props.getArticles();
    console.log("this is from article list view", this.props.articles)
  }

  render() {
    console.log(this.props.isFetching)
    return (
      <>
      { this.props.isFetching ? <div>Loading...</div> : <div>
        {this.props.articles.map(a => {
          return (
            <div>
              <div key={a.id}>
                <Article
                  title={a.title}
                  summary={a.summary}
                  link={a.link}
                  image={a.image}
                  category={a.category}
                />
              </div>
            </div>
          );
        })}
      </div>}
      </>
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
  )(ArticleListView)
);
