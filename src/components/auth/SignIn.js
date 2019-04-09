import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.signIn(this.state); 
    }
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form className="signinform"
             onSubmit={this.handleSubmit}>
            <div className="input-row">
                <label htmlFor="email">Email</label>
                <input type="email"
                        id="email"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <label htmlFor="password">Password</label>
                <input type="password"
                        id="password"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <button className="btn login-btn">Sign In</button>
               <div className="input-row">{ authError ? <p>{authError}</p> : null }</div>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(SignIn);
