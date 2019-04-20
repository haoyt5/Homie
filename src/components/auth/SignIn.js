import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from  'react-router-dom';
import { signIn, googleLogin } from '../store/actions/authActions';

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>  {
        e.preventDefault();
        console.log(this.state)
        this.props.signIn(this.state); 
    }
    handleGoogleLogin = (e) =>{
      this.props.googleLogin()
    }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to ='/' />
    
    return (
      <div className="container">
        <h2 className="sub-instruciton-title">Member Login</h2>
        <div className="formoutter">
          <div className="formwrapper">
            <div className="button-row">
              <button onClick={this.handleGoogleLogin}
                      className="google-button" >
                <div className="login-icon">G</div>
                <div className="login-text">Continue with Google</div> 
              </button>
            </div>
            <div className="feature-row">
              <div className="hr-box ">
                <div className="hr-placer">———</div>
                <div className="hr">OR</div>
                <div className="hr-placer">———</div>
              </div>
            </div>
            <form className="signinform"
                onSubmit={this.handleSubmit}>
                <label className="label-font" htmlFor="email">Email</label>
                <div className="input-row">
                    <input type="email"
                            id="email"
                            onChange={this.handleChange}/>
                </div>
                <label className="label-font"  htmlFor="password">Password</label>
                <div className="input-row">
                    <input type="password"
                            id="password"
                            onChange={this.handleChange}/>
                </div>
                <div className="text-row error-holder">
                  { authError ? <p className="alert-font">{authError}</p> : null }
                </div>
                <div className="feature-row">
                    <button className="medium-button">Log in
                    </button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    googleLogin: () => dispatch(googleLogin())
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(SignIn);
