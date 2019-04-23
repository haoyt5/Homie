import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
import Landing from '../dashboard/Landing'
import GroupPopup from '../dashboard/GroupPopup' 
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchGroup } from '../store/actions/groupActions'
import { fetchTaskList } from '../store/actions/taskActions'
class Dashboard extends Component {
    state = {
        groupPopup: false
    }
    togglePopup = () => {
        if( !this.state.groupPopup ){
            this.props.fetchGroup(this.props.groupsUid)
        } 
        this.setState( prevState => ({
            groupPopup: !prevState.groupPopup
        }));
        this.props.fetchTaskList(this.props.auth.uid)
    }
    componentDidMount(){
        if(this.props.auth.uid){
            this.props.fetchTaskList(this.props.auth.uid)
        }
    }
    componentDidUpdate(){
    
    }

    render(){
        const { tasksData, auth } = this.props
        // console.log(this.props)
        // if (!auth.uid) return <Redirect to='/signin'/>
        if (auth.uid){
            return (
                <div className="dashboard-wrapper">
                {this.state.groupPopup ? <GroupPopup togglePopup={this.togglePopup.bind(this)} groupsData={this.props.groupsData}/> : null}
                    <div className="container">
                        <div className="selected-wrapper">
                            <div className="selected-group" onClick={this.togglePopup}>
                                {this.props.profile.defaultGroup} <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <TaskList task={ tasksData } /> 
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
    
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth,
        groupsUid: state.firebase.profile.groupsUid,
        groupsData: state.group.groups,
        profile:state.firebase.profile,
        defaultGroup:state.firebase.profile.defaultGroup,
        tasksData:state.task.tasksData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroup: (groupsUid) => dispatch(fetchGroup(groupsUid)),
        fetchTaskList: (userUid) => dispatch(fetchTaskList(userUid)) 
    }

}
export default  connect( mapStateToProps, mapDispatchToProps)(Dashboard);
// export default compose(
//     connect( mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//         { collection: 'tasks' , orderBy:['createAt','desc']}
//     ])
// )(Dashboard);