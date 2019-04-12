import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
class Navbar extends Component{


    render(){
        const { auth,  profile } = this.props;
        const links = auth.uid ?  <SignedInLinks profile={ profile } /> : <SignedOutLinks />;
        return(
        <nav className="navwrapper"> 
            <div className="container">
                <Link to='/' className="brandname">HOMIE</Link>
                { links }
            </div>
        </nav>
        )
    }
}


const mapStateToProps = ( state ) => {
    // console.log( state )
    return {
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);