import React, { Component } from 'react'

class SignInGroup extends Component {
    state = {

    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        // this.props.signUp(this.state)
        //after submit redidirect the user
        // this.props.history.push('/')
    }
  render() {
    return (

        <div className="formoutter">
          <div className="formwrapper-bottom">
            <form className="signinform"
                onSubmit={this.handleSubmit}>
                <label className="label-font" htmlFor="groupId">Group ID</label>
                <div className="input-row">
                    
                    <input type="text"
                            id="groupId"
                            onChange={this.handleChange}/>
                </div>
                <label className="label-font" htmlFor="password">Password</label>
                <div className="input-row">
                    <input type="password"
                            id="password"
                            onChange={this.handleChange}/>
                </div>
                <div className="text-row error-holder">
                    {/* { authError ? <p className="alert-font">{ authError }</p>  : null}  */}
                </div>
                <div className="feature-row">
                    <button className="medium-button">Log in</button>
                </div>
            </form>
          </div>
        </div>

    )
  }
}

export default SignInGroup
