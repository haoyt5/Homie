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
                    <div className="link-wrapper">
                        <NavLink className="signgroup-tab" activeClassName="signgroup-tab-active" to="/signgroup/signup" >Create Group</NavLink>
                        <NavLink className="signgroup-tab" activeClassName="signgroup-tab-active" to="/signgroup/signin" >Join Group</NavLink>
                    </div>
                    {/* <form className="signinform">
                    <div className="feature-row">
                    <button className="medium-button">Create Group</button>
                    </div>
                    </form> */}
                </div>
            </div>

            <Route path="/signgroup/signup" component={SignUpGroup} />
            <Route path="/signgroup/signin" component={SignInGroup} />
        </div>
       
    )
}
export default SignGroup