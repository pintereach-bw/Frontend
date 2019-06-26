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
      <>
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
      </>
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

const loginDiv = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const loginForm = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  maxWidth: "15",
  maxHeight: "10%"
};

const inputStyle = {
    padding: "5px",
    borderRadius: "10px",
    width: "100%",
    textAlign: "center",
    marginBottom: "10px"
}

const buttonStyle = {
    padding: "5px",
    borderRadius: "10px",
    width: "100%",
    textAlign: "center",
    marginBottom: "10px"
}