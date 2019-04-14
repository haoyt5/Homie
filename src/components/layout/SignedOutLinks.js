import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <div className="signinwrapper">
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/signin">Log in</NavLink>
        </div>
    )
    
}
export default SignedOutLinks;