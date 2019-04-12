import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'



const SignedInLinks = (props) => {
    const { profile } = props
    return(
        <div className="signinwrapper">
            <NavLink to="/post">New Task</NavLink>
            <a href="/" onClick={ props.signOut }>Log Out</a>   
            <NavLink to="/" className="avatar-circle">{profile.initials}</NavLink>
        </div>
    )   
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut:() => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);