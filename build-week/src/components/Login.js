import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../actions'

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ credentials: {...this.state.credentials, [e.target.name]: e.target.value}})
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(()=> {
            this.props.history.push('/login')
        })
    }
 
    render() {
        if (this.props.isLoggingIn) {
            return <p>LOGGING IN...</p>
        }
        return (
            <>
              <form onSubmit={this.login}>
                  <input type='text' name='username' value={this.state.credentials.username} onChange={this.changeHandler} placeholder='username' />
                  <input type='password' name='password' value={this.state.credentials.password} onChange={this.changeHandler} placeholder='password' />
                  <button>Log In</button>
              </form>  
            </>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps, { login })(Login)