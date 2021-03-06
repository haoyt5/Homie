import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpGroup } from '../store/actions/authActions'

export class SignUpGroup extends Component {
    state = {
      groupName: '',
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
        this.props.signUpGroup(this.state)
    }
    
  render() {
    return (
        <div className="formoutter">
          <div className="formwrapper-bottom">
            <form className="signinform"
                onSubmit={this.handleSubmit}>
                <label className="label-font" htmlFor="groupName">Group Name</label>
                <div className="input-row">
                    <input type="text"
                            id="groupName"
                            onChange={this.handleChange}
                            />
                </div>
                <label className="label-font" htmlFor="groupId">Group ID</label>
                <div className="input-row">
                    <input type="text"
                            id="groupId"
                            onChange={this.handleChange}
                            />
                </div>
                <label className="label-font" htmlFor="groupPassword">Group Password</label>
                <div className="input-row">
                    <input type="password"
                            id="groupPassword"
                            onChange={this.handleChange}
                            />
                </div>
                <div className="text-row error-holder">
                    { this.props.groupError ? <p className="alert-font">{ this.props.groupError }</p>  : null} 
                </div>
                <div className="feature-row">
                    <button className="medium-button">Create Group</button>
                </div>
            </form>
          </div>
        </div>

    )
  }
}
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      groupError: state.auth.groupError
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
      signUpGroup: (newGroup) => dispatch(signUpGroup(newGroup))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SignUpGroup);
