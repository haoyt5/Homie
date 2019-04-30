import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
import Landing from '../dashboard/Landing'
import GroupPopup from '../dashboard/GroupPopup' 
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';


import { fetchGroupList, fetchGroupDetails } from '../store/actions/groupActions'
import { fetchTaskList } from '../store/actions/taskActions'
class Dashboard extends Component {
    state = {
        groupPopup: false,
        memberBar: false
    }
    togglePopup = () => {
        if( !this.state.groupPopup ){
            if (this.props.profile.defaultGroup) {
                this.props.fetchGroupList(this.props.groupsUid)
                this.props.fetchTaskList()
            }
           
        } 
        if (this.state.groupPopup){
            if (this.props.profile.defaultGroup) {
            this.props.fetchTaskList(this.props.auth.uid)
            this.props.fetchGroupDetails(this.props.auth.uid)
            }
        }
        this.setState( prevState => ({
            groupPopup: !prevState.groupPopup
        }));
    }
    toggleMemberbar = () => {
        console.log(this.state)
        this.setState( prevState => ({
            memberBar: !prevState.memberBar
        }))
    }
    componentDidMount(){
        if(this.props.auth.uid){
            this.props.fetchTaskList(this.props.auth.uid)
            this.props.fetchGroupDetails(this.props.auth.uid)
        }
    }
    componentWillUnmount(){
        this.props.fetchTaskList()
    }
    render(){
        const { completeTasksData, pendingTasksData,assignedTasksData, unassignedTasksData, tasksData, auth } = this.props
        // console.log(pendingTasksData)
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
                        <div className="indicator-wrapper">
                            <div className="icon-bar">
                                <div onClick={ this.toggleMemberbar }
                                     className="indicator-button ">
                                    <FontAwesomeIcon icon={faUser} /> 4
                                </div>
                            </div>
                            { this.state.memberBar ? (
                                <div className="member-bar u-border">
                                    <div className="member-cirle">1</div>
                                    <div className="member-cirle">2</div>
                                    <div className="member-cirle">3</div>
                                </div>
                            ): null}

                        </div>
                    </div>
                    <div className="container">
                    {this.state.groupPopup ? null :  <TaskList task={ tasksData } unassignedTasks={ unassignedTasksData } assignedTasks={ assignedTasksData } pendingTasks={ pendingTasksData } completeTasks={ completeTasksData }/> }
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
    const auth = state.firebase.auth ? state.firebase.auth:null
    return {
        tasks: state.firestore.ordered.tasks,
        auth: auth,
        groupsUid: state.firebase.profile.groupsUid,
        groupsData: state.group.groups,
        profile:state.firebase.profile,
        defaultGroupData:defaultGroupData,
        tasksData:state.task.tasksData,
        unassignedTasksData: state.task.unassignedTasksData,
        assignedTasksData: state.task.assignedTasksData,
        pendingTasksData: state.task.pendingTasksData,
        completeTasksData: state.task.completeTasksData
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