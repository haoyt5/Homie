import React, { Component } from 'react'
import { faGripLines, faPlus, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'

import { switchGroup } from '../store/actions/groupActions'
import { fetchGroupDetails } from '../store/actions/groupActions'
export class GroupPopup extends Component {

    handleSwitch = (groupUid) => {
        this.props.switchGroup(groupUid)
        this.props.togglePopup()
        this.props.fetchGroupDetails()
    }
    componentDidUpdate(){
        // console.log(this.props)
    }
    componentWillMount(){
        
    }
    render() {
        const { groupsData } = this.props
        return (
        <div className="popup" >
            <div className="container">
                <div className="row">
                    <div className="close-popup-row" onClick={this.props.togglePopup}><FontAwesomeIcon icon={faGripLines} /></div> 
                </div>
                <div className="option-block">
                { groupsData && groupsData.map(group => {
                        const { groupUid, groupName }= group;
                        return (
                            <div onClick={()=>this.handleSwitch(groupUid)} className="option-row " key={groupUid}>
                                <div className="option-icon">
                                    <FontAwesomeIcon icon={faDoorClosed} />
                                </div>
                                <div className="option-text">{ groupName }</div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="u-bottom">
                    <div className="container">
                        <NavLink to="/signgroup/signin" >
                            <div  className="option-row ">
                                <div className="option-icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className="option-text">Join new group</div>
                            </div>
                        </NavLink> 
                    </div>

                </div>

            </div>
        </div>
        )
    }
}
const mapStatetToProps = (state) => {
    return {
        groupsUid: state.firebase.profile.groupsUid,
        defaultGroup: state.firebase.profile.defaultGroup
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        switchGroup: (newGroupUid) => dispatch(switchGroup(newGroupUid)),
        fetchGroupDetails: (groupUid) => dispatch(fetchGroupDetails(groupUid))
    }
}
export default connect(mapStatetToProps,mapDispatchToProps)(GroupPopup);
