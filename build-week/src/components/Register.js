import React, { Component } from "react";
import { connect } from "react-redux";

import { register } from "../actions";

class Register extends Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newCredentials).then(() => {
      this.props.history.push("/article");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>REGISTERING...</p>;
    }
    return (
      <>
        <div style={registerDiv}>
          <form onSubmit={this.register} style={registerForm}>
            <h2>Register Your Account!</h2>
            <input
              style={inputStyle}
              type="text"
              name="username"
              value={this.state.newCredentials.username}
              onChange={this.changeHandler}
              placeholder="username"
            />
            <input
              style={inputStyle}
              type="password"
              name="password"
              value={this.state.newCredentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <button onClick={this.register} style={buttonStyle}>
              Register Now
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  LoggingIn: state.LoggingIn
});

export default connect(
  mapStateToProps,
  { register }
)(Register);

const registerDiv = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  width: "100%",
  height: "100%"
};

const registerForm = {
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
};

const buttonStyle = {
  padding: "5px",
  borderRadius: "10px",
  width: "100%",
  textAlign: "center",
  marginBottom: "10px"
};
