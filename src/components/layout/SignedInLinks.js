import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInLinks = () => {
    return(
        <div className="signinwrapper">
            <NavLink to="/">New Task</NavLink>
            <NavLink to="/">Log Out</NavLink>
            <NavLink to="/" className="avatar-circle">KT</NavLink>
        </div>
    )
    
}
export default SignedInLinks;