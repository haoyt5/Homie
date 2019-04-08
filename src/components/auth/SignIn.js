import React, { Component } from 'react'

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
    }
  render() {
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
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
