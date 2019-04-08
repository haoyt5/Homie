import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedOutLinks = () => {
    return(
        <div className="signinwrapper">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Log In</NavLink>
        </div>
    )
    
}
export default SignedOutLinks;