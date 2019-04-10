import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = ( props ) => {
    const { auth } = props;
    // console.log(auth)
    const links = auth.uid ?  <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="navwrapper"> 
            <div className="container u-border">
                <Link to='/' className="brandname u-border">Homie</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = ( state ) => {
    console.log( state )
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);