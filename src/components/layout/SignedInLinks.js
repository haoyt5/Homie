import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'



const SignedInLinks = (props) => {
    const { profile } = props
    return(
        <div className="signinwrapper">
            <NavLink to="/signgroup/signin" className="link-button">Join group</NavLink>
            <NavLink to="/" className="link-button" onClick={ props.signOut }>Log out</NavLink>   
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