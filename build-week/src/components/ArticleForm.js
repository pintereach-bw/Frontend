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
        ...this.state.article,
        [e.target.name]: e.target.value
      }
    });
  };

  addArticle = e => {
    e.preventDefault();
    this.props.addArticle(this.state.article);
    console.log(this.props.addArticle);
    this.props.history.push("/articles");
  };

  render() {
    console.log(this.props.addArticle);
    return (
      <div style={ mainDiv }>
        <div style={ addDiv }>
          <form style={ addForm }>
          <h2>Add something new!</h2>
            <input style={ inputStyle }
              type="text"
              name="title"
              placeholder="Title"
              required
              onChange={this.handleChanges}
              value={this.state.article.title}
            />
            <input style={ inputStyle }
              type="text"
              name="summary"
              placeholder="Summary"
              required
              onChange={this.handleChanges}
              value={this.state.article.summary}
            />
            <input style={ inputStyle }
              type="text"
              name="link"
              placeholder="Link"
              required
              onChange={this.handleChanges}
              value={this.state.article.link}
            />
            <input style={ inputStyle }
              type="text"
              name="image"
              placeholder="Image"
              required
              onChange={this.handleChanges}
              value={this.state.article.image}
            />
            <input style={ inputStyle }
              type="text"
              name="category"
              placeholder="Category"
              required
              onChange={this.handleChanges}
              value={this.state.article.category}
            />
            <button onClick={this.addArticle} style={ buttonStyle }>Submit</button>
          </form>
        </div>
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

const mainDiv = {
  display: "flex",
  width: "100%",
  position: "absolute",
  height: "100%",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
};

const addDiv = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
  maxWidth: "100%",
  width: "100%"
};

const addForm = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  maxWidth: "100%",
  maxHeight: "100%",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "30px"
};

const inputStyle = {
  padding: "5px",
  borderRadius: "10px",
  width: "90%",
  textAlign: "center",
  marginBottom: "10px"
};

const buttonStyle = {
  padding: "5px",
  borderRadius: "10px",
  width: "90%",
  textAlign: "center",
  marginBottom: "10px",
  backgroundColor: "red",
  color: "white"
};
