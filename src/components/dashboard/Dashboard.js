import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
import BarChart from '../chart/BarChart'
import Landing from '../dashboard/Landing'
import GroupPopup from '../dashboard/GroupPopup' 
import InfoWindow from '../alert/InfoWindow'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faAngleDown, faUser, faCog, faUnlink, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { fetchGroupList, fetchGroupDetails } from '../store/actions/groupActions'
import { fetchTaskList } from '../store/actions/taskActions'

class Dashboard extends Component {

    state = {
        groupPopup: false,
        leavePopup:false,
        memberBar: false,
        settingBar:false
    }
    togglePopup = () => {
        if( !this.state.groupPopup ){
            if (this.props.profile.defaultGroup) {
                this.props.fetchGroupList(this.props.groupsUid)
                this.props.fetchTaskList()
                this.props.fetchGroupDetails()
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
    toggleSettingBar = () => {
        this.setState( prevState => ({
            settingBar: !prevState.settingBar
        }))
        if(this.state.memberBar){
            this.setState( prevState => ({
                memberBar: !prevState.memberBar
            }))
        }
    }
    toggleMemberbar = () => {
        this.setState( prevState => ({
            memberBar: !prevState.memberBar
        }))
        if(this.state.settingBar){
            this.setState( prevState => ({
                settingBar: !prevState.settingBar
            }))
        }

    }
    toggleLeaveGruop = (e) => {
        this.setState(prevState => ({
            leavePopup: !prevState.leavePopup
        }))
    }
    componentDidMount(){
        if(this.props.auth.uid){
            this.props.fetchTaskList(this.props.auth.uid)
            this.props.fetchGroupDetails(this.props.auth.uid)
        }
    }  
    componentWillUnmount(){
        console.log('unmount dashboard EMPTY')
        this.props.fetchGroupDetails()
        this.props.fetchTaskList()
    }
    render(){
        const { membersInfo, completeTasksData, pendingTasksData,assignedTasksData, unassignedTasksData, tasksData, auth } = this.props
        let pointsData =[]
        const {membersPointsRecord} = this.props
        this.props.membersPointsRecord && Object.keys(membersPointsRecord).forEach(e => {
            pointsData.push(membersPointsRecord[e])
        })
        console.log(this.props.fetchComplete)
        if (auth.uid){
            return (
                <div className="dashboard-wrapper">
                { this.state.groupPopup ? <GroupPopup togglePopup={ this.togglePopup.bind(this) } groupsData={ this.props.groupsData }/> : null }
                { this.state.leavePopup ? <InfoWindow toggleLeaveGroup={ this.toggleLeaveGruop.bind(this) }/> : null}
                    <div className="container">
                        <div className="selected-wrapper">
                            <div className="selected-group" onClick={this.togglePopup}>
                                { this.props.defaultGroupData ? this.props.defaultGroupData.groupName : null } <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="icon-bar">
                                 <div onClick={ this.toggleSettingBar }
                                     className="indicator-button ">
                                    <FontAwesomeIcon icon={faCog} /> 
                                </div>
                                <div onClick={ this.toggleMemberbar }
                                     className="indicator-button ">
                                    <FontAwesomeIcon icon={faUser} /> {this.props.defaultGroupData ? (this.props.defaultGroupData.members.length) : 1}
                                </div>

                            </div>
                            { this.state.memberBar ? (
                                <div className="member-bar">
                                    { membersInfo ? (
                                        Object.keys(membersInfo).map(e => {
                                                return ( 
                                                    <div className="member-button" key={e} >
                                                        <div className="member-cirle">
                                                            <div className="circle-wrapper">
                                                                { membersInfo[e].photoURL==='null' ? <div className="member-img-holder"> <FontAwesomeIcon icon={ faUserAlt } /> </div> :<img src={ membersInfo[e].photoURL } alt=""/> }
                                                            </div>
                                                        </div>
                                                        <span className="circle-name">{membersInfo[e].firstname}</span>
                                                    </div>
                                                )
                                            }))  
                                     : null
                                    }
                                </div>
                            ): null }
                            { this.state.settingBar ? (
                                <div className="setting-bar">
                                    <Link to="/signgroup/signin">
                                    <div className="setting-button">
                                        <FontAwesomeIcon icon={faDoorOpen}/>  Join new group
                                    </div>
                                    </Link>
                                    <div onClick={this.toggleLeaveGruop}
                                         className="setting-button">
                                        <FontAwesomeIcon icon={faUnlink }/> Leave this group
                                    </div>
                                </div>
                            ) : null }
                        </div>
                    </div>
                    <div className="container">  
                    {this.state.groupPopup || this.state.leavePopup ? null :<BarChart data={this.props.pointsData} width={this.state.width} height={this.state.height} />}
                    </div>
                    
                    <div className="container">
                    {this.state.groupPopup || this.state.leavePopup ? null :  <TaskList fetchComplete = {this.props.fetchComplete}  task={ tasksData } unassignedTasks={ unassignedTasksData } assignedTasks={ assignedTasksData } pendingTasks={ pendingTasksData } completeTasks={ completeTasksData }/> }
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
    let pointsData =[]
    const membersPointsData = state.group.defaultGroupData ? state.group.defaultGroupData.pointsRecord : null
    membersPointsData && Object.keys(membersPointsData).forEach(e => {
        pointsData.push(membersPointsData[e])
    })

    const defaultGroupData = state.group.defaultGroupData ? state.group.defaultGroupData :null
    const auth = state.firebase.auth ? state.firebase.auth : null
    const membersInfo = state.group.defaultGroupData ? state.group.defaultGroupData.membersInfo : null
    const membersPointsRecord = state.group.defaultGroupData ? state.group.defaultGroupData.pointsRecord : null
    return {
        tasks: state.firestore.ordered.tasks,
        auth: auth,
        groupsUid: state.firebase.profile.groupsUid,
        groupsData: state.group.groups,
        profile:state.firebase.profile,
        defaultGroupData:defaultGroupData,
        membersInfo:membersInfo,
        membersPointsRecord:membersPointsRecord,
        tasksData:state.task.tasksData,
        unassignedTasksData: state.task.unassignedTasksData,
        assignedTasksData: state.task.assignedTasksData,
        pendingTasksData: state.task.pendingTasksData,
        completeTasksData: state.task.completeTasksData,
        pointsData:pointsData,
        fetchComplete:state.task.complete
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
