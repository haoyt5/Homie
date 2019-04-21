import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
import Landing from '../dashboard/Landing'
import GroupPopup from '../dashboard/GroupPopup' 
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 

// fontAwesome
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Dashboard extends Component {
    state = {
        groupPopup: false
    }
    togglePopup = () => {
        this.setState( prevState => ({
            groupPopup: !prevState.groupPopup
        }))
    }
    componentDidUpdate(){
        // console.log( this.props)
    }
    render(){
        const { tasks, auth } = this.props
        // if (!auth.uid) return <Redirect to='/signin'/>
        if (auth.uid){
            return (
                <div className="dashboard-wrapper">
                {this.state.groupPopup ? <GroupPopup togglePopup={this.togglePopup.bind(this)}/> : null}
                    <div className="container">
                        <div className="selected-wrapper">
                            <div className="selected-group" onClick={this.togglePopup}>
                                221B  <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <TaskList task={ tasks } />
                    </div>
                </div>
            )
        } else {
            return (
                 <div className="landing-wrapper">
                    <Landing />
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth
    }
}

// export default  connect(mapStateToProps)(Dashboard);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' , orderBy:['createAt','desc']}
    ])
)(Dashboard);