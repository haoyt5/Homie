import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { createHashHistory } from 'history'
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
        // this.props.signInGroup(this.state)
        if( this.state.groupId.length === 0 || this.state.groupPassword.length === 0 ){
          document.querySelector('.error-holder').innerHTML='<p class="alert-font">That was an invalid user id or password.</p>';
          return
        }if( this.state.groupId.length > 0 && this.state.groupPassword.length > 0){
          document.querySelector('.error-holder').innerHTML='';
          this.props.signInGroup(this.state)
        }
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
                    <button className="medium-button">Join Group</button>
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
