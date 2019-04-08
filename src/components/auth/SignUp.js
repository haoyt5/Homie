import React, { Component } from 'react'

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
                <label htmlFor="firstname">Firstname</label>
                <input type="text"
                        id="firstname"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <label htmlFor="lastname">Lastname</label>
                <input type="text"
                        id="lastname"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <button className="btn login-btn">Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
