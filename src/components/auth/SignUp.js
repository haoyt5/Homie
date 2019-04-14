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
        <div className="formoutter">
          <div className="formwrapper">
            <form className="signinform"
                onSubmit={this.handleSubmit}>
                <div className="button-row">
                  <button className="google-button" >
                    <div className="login-icon">G</div>
                    <div className="login-text">Sign up with Google</div> 
                  </button>
                </div>
                <div className="feature-row">
                  <div className="hr-box ">
                    <div className="hr-placer">———</div>
                    <div className="hr">OR</div>
                    <div className="hr-placer">———</div>
                  </div>
                </div>
                <label className="label-font" htmlFor="email">Email</label>
                <div className="input-row">
                    
                    <input type="email"
                            id="email"
                            onChange={this.handleChange}/>
                </div>
                <label className="label-font" htmlFor="password">Password</label>
                <div className="input-row">
                    <input type="password"
                            id="password"
                            onChange={this.handleChange}/>
                </div>
                <label className="label-font" htmlFor="firstName">Firstname</label>
                <div className="input-row">
                    <input type="text"
                            id="firstName"
                            onChange={this.handleChange}/>
                </div>
                <label className="label-font" htmlFor="lastName">Lastname</label>
                <div className="input-row">
                    <input type="text"
                            id="lastName"
                            onChange={this.handleChange}/>
                </div>
                <div className="text-row error-holder">
                    { authError ? <p className="alert-font">{ authError }</p>  : null} 
                </div>
                <div className="feature-row">
                    <button className="medium-button">Sign Up</button>
                </div>
            </form>
          </div>
        </div>
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
