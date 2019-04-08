import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
const Navbar = () => {
    return(
        <nav className="navwrapper"> 
            <div className="container u-border">
                <Link to='/' className="brandname u-border">Homie</Link>
                <SignedOutLinks />
                <SignedInLinks />
                
            </div>
        </nav>
    )
    
}
const mapStateToProps = ( state ) => {
    console.log( state )
    return {

    }
}
export default connect(mapStateToProps)(Navbar);