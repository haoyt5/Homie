import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <div className="signinwrapper">
            <NavLink to="/signup" className="link-button">Sign up</NavLink>
            <NavLink to="/signin"className="link-button ">Log in</NavLink>
        </div>
    )
    
}
export default SignedOutLinks;