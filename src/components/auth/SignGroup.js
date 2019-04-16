import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import SignUpGroup from './SignUpGroup'
import SignInGroup from './SignInGroup'
const SignGroup = () =>{
    return(
        <div className="container">
        <h2 className="sub-instruciton-title">Join the Homie Group</h2>
            <div className="formoutter">
                <div className="formwrapper-top ">
                    <div className="link-wrapper u-border">
                        <NavLink to="/signgroup/signup" >Signup Group</NavLink>
                        <NavLink to="/signgroup/signin" >Signin Group</NavLink>
                    </div>

                </div>
            </div>

            <Route path="/signgroup/signup" component={SignUpGroup} />
            <Route path="/signgroup/signin" component={SignInGroup} />
        </div>
       
    )
}
export default SignGroup