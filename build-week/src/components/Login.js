import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/article");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>LOGGING IN...</p>;
    }
    return (
      <div style={ mainDiv }>
        <div style={loginDiv}>
          <form onSubmit={this.login} style={loginForm}>
            <h2>Welcome to Pintereach!</h2>
            <input style={ inputStyle }
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder="username"
            />
            <input style={ inputStyle }
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <button style={ buttonStyle }>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);

const mainDiv = {
  display: "flex",
  width: "100%",
  position: "absolute",
  height: "100%",
  backgroundImage: "url(https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80)"
}

const loginDiv = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",  
  maxWidth: "100%",
  width: "100%"
};

const loginForm = {
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
}

const buttonStyle = {
    padding: "5px",
    borderRadius: "10px",
    width: "90%",
    textAlign: "center",
    marginBottom: "10px"
}