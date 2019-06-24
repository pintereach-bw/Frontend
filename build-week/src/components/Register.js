import React, { Component } from 'react'
import { connect } from 'react-redux'

import { register } from '../actions'

class Register extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ credentials: {...this.state.credentials, [e.target.name]: e.target.value}})
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
        .then(()=> {
            this.props.history.push('/login')
        })
    }
 
    render() {
        if (this.props.isLoggingIn) {
            return <p>REGISTERING...</p>
        }
        return (
            <>
              <form onSubmit={this.register}>
                  <input type='text' name='username' value={this.state.credentials.username} onChange={this.changeHandler} placeholder='username' />
                  <input type='password' name='password' value={this.state.credentials.password} onChange={this.changeHandler} placeholder='password' />
                  <button onClick={this.register}>Register Now</button>
              </form>  
            </>
        )
    }
}

const mapStateToProps = state => ({
    LoggingIn: state.LoggingIn
})

export default connect(mapStateToProps, { register })(Register)
