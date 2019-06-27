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
      this.props.history.push("/articles");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>REGISTERING...</p>;
    }
    return (
      <div style={mainDiv}>
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
      </div>
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

const mainDiv = {
  display: "flex",
  width: "100%",
  position: "absolute",
  height: "100%",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1489435518427-e047d52082f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
};

const registerDiv = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
  maxWidth: "100%",
  width: "100%"
};

const registerForm = {
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
