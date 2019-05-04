import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRunning } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { confirmTaskAlert } from '../store/actions/taskActions'
import { leaveGroup } from '../store/actions/authActions'
export class InfoWindow extends Component {
  handleConfirm = () =>{
     this.props.leaveGroup()
     
  }
  render() {
    return (
          <div className="popup-layer">
            <div className="container">
                <div className="information-window">
                    <div className="container">           
                    <h1 className="alert-icon browncolor-icon"><FontAwesomeIcon icon={ faRunning }/></h1>
                    <h2>Warning</h2>
                    <h4>Are you sure to leave this group? All your records in this group will be deleted.</h4>
                    <hr/>
                    </div>
                    <div className="feature-row">
                    <button className="small-square-button cancel-button"
                            onClick={ this.props.toggleLeaveGroup }>Dismiss</button>
                    <button className="small-square-button"
                            onClick={ this.handleConfirm }>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    confirmTaskAlert: ()=>dispatch(confirmTaskAlert()),
    leaveGroup: () => dispatch(leaveGroup())
  }
}
export default connect(null, mapDispatchToProps)(InfoWindow);
