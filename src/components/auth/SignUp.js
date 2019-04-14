import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from  'react-router-dom'

import { signUp } from '../store/actions/authActions'
export class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state)
        //after submit redidirect the user
        // this.props.history.push('/')
    }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to ='/' />
    return (
      <div className="container">
      <h2 className="sub-instruciton-title">Start with Homie</h2>
        <form className="signinform"
             onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <div className="input-row">
                
                <input type="email"
                        id="email"
                        onChange={this.handleChange}/>
            </div>
            <label htmlFor="password">Password</label>
            <div className="input-row">
                <input type="password"
                        id="password"
                        onChange={this.handleChange}/>
            </div>
            <label htmlFor="firstName">Firstname</label>
            <div className="input-row">
                <input type="text"
                        id="firstName"
                        onChange={this.handleChange}/>
            </div>
            <label htmlFor="lastName">Lastname</label>
            <div className="input-row">
                <input type="text"
                        id="lastName"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                { authError ? <p className="alert-font">{ authError }</p>  : null} 
            </div>
            <div className="input-row">
                <button className="btn login-btn">Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
