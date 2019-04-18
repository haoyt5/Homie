import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInGroup } from '../store/actions/authActions'
class SignInGroup extends Component {
    state = {
      groupId: '',
      groupPassword: ''
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signInGroup(this.state)
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
                <label className="label-font" htmlFor="groupPassword">Password</label>
                <div className="input-row">
                    <input type="password"
                            id="groupPassword"
                            onChange={this.handleChange}/>
                </div>
                <div className="text-row error-holder">
                    { this.props.groupError ? <p className="alert-font">{ this.props.groupError }</p>  : null} 
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
const mapStateToProps = (state) => {
    return {
      groupError: state.auth.groupError
    }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    signInGroup: (creds) => dispatch(signInGroup(creds))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInGroup);
