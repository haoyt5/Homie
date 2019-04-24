import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
import Landing from '../dashboard/Landing'
import GroupPopup from '../dashboard/GroupPopup' 
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchGroupList, fetchGroupDetails } from '../store/actions/groupActions'
import { fetchTaskList } from '../store/actions/taskActions'
class Dashboard extends Component {
    state = {
        groupPopup: false
    }
    togglePopup = () => {
        if( !this.state.groupPopup ){
            this.props.fetchGroupList(this.props.groupsUid)
        } 
        this.setState( prevState => ({
            groupPopup: !prevState.groupPopup
        }));
        if (this.state.groupPopup){
            this.props.fetchTaskList(this.props.auth.uid)
            this.props.fetchGroupDetails(this.props.auth.uid)
        }

    }
    componentDidMount(){
        if(this.props.auth.uid){
            this.props.fetchTaskList(this.props.auth.uid)
            this.props.fetchGroupDetails(this.props.auth.uid)
        }
    }
    componentWillUnmount(){
    
    }

    render(){
        const { assignedTasksData, unassignedTasksData, tasksData, auth } = this.props
        if (auth.uid){
            
            return (
                <div className="dashboard-wrapper">
                {this.state.groupPopup ? <GroupPopup togglePopup={ this.togglePopup.bind(this) } groupsData={ this.props.groupsData }/> : null }
                    <div className="container">
                        <div className="selected-wrapper">
                            <div className="selected-group" onClick={this.togglePopup}>
                                { this.props.defaultGroupData ? this.props.defaultGroupData.groupName : null } <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <TaskList task={ tasksData } unassignedTasks={ unassignedTasksData } assignedTasks={ assignedTasksData } />
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
    const defaultGroupData = state.group.defaultGroupData ? state.group.defaultGroupData :null
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth,
        groupsUid: state.firebase.profile.groupsUid,
        groupsData: state.group.groups,
        profile:state.firebase.profile,
        defaultGroupData:defaultGroupData,
        tasksData:state.task.tasksData,
        unassignedTasksData: state.task.unassignedTasksData,
        assignedTasksData: state.task.assignedTasksData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroupList: (groupsUid) => dispatch(fetchGroupList(groupsUid)),
        fetchTaskList: (userUid) => dispatch(fetchTaskList(userUid)),
        fetchGroupDetails: (groupUid) => dispatch(fetchGroupDetails(groupUid)) 
    }

}
export default  connect( mapStateToProps, mapDispatchToProps)(Dashboard);
// export default compose(
//     connect( mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//         { collection: 'tasks' , orderBy:['createAt','desc']}
//     ])
// )(Dashboard);