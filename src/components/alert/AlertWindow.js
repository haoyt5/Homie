import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { confirmTaskAlert } from '../store/actions/taskActions'
export class AlertWindow extends Component {
  handleAlert = (e) => {
    this.props.confirmTaskAlert()
  }
  render() {
    return (
          <div className="popup-layer">
            <div className="container">
                <div className="information-window">
                    <div className="container">           
                    <h1 className="alert-icon"><FontAwesomeIcon icon={ faExclamationTriangle }/></h1>
                    <h2>Error</h2>
                    <h4>{this.props.errorMessage}</h4>
                    <hr/>
                    <button className="medium-button"
                            onClick={ this.handleAlert }>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    errorMessage: state.task.errMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    confirmTaskAlert: ()=>dispatch(confirmTaskAlert())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertWindow);
