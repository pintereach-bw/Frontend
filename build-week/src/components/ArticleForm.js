import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

class ArticleForm extends Component {
  state = {
      article: {
      title: "",
      summary: "",
      link: "",
      image: "",
      category: ""
    }
  };
  handleChanges = e => {
    this.setState({
        article: {
     ...this.state.article, [e.target.name]: e.target.value 
    }
    });
  };

  addArticle = e => {
    e.preventDefault()
    this.props.addArticle(this.state.article)
    console.log(this.props.addArticle)
    this.props.history.push("/articles")
}

  render() {
      console.log(this.props.addArticle)
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChanges}
            value={this.state.article.title}
          />
          <input
            type="text"
            name="summary"
            placeholder="Summary"
            onChange={this.handleChanges}
            value={this.state.article.summary}
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            onChange={this.handleChanges}
            value={this.state.article.link}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            onChange={this.handleChanges}
            value={this.state.article.image}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={this.handleChanges}
            value={this.state.article.category}
          />
          <button onClick={ this.addArticle }>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addArticle: state.addArticle
});

export default connect(
    mapStateToProps,
    { addArticle }
  )(ArticleForm);
  
