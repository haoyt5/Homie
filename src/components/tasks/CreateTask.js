import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask, confirmTaskAlert } from '../store/actions/taskActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import DateFnsUtils from "@date-io/date-fns";
import {  MuiPickersUtilsProvider, DateTimePicker } from "material-ui-pickers";
export class CreatTask extends Component {
    state = {
        title: '',
        content: '',
        category:'trash',
        expiryDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        verifybyImage:false
    }
    handleBack = (e) => {
      e.preventDefault();
      window.location.href="#/"
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
    }
    toggleChange = () => {
      this.setState({
        verifybyImage: !this.state.verifybyImage,
      });
    }
    handleDateChange = date => {
      this.setState({ expiryDate: date });
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createTask(this.state);
    }
    handleAlert = (e) => {
      this.props.confirmTaskAlert()
    }
  render() {
    const { expiryDate } = this.state;
    return (
      <div data-test="component-create-task" className="component-create-task">
        {this.props.taskErr ? (
          <div className="popup-layer">
          <div className="container">
            <div className="information-window">
                <div className="container">           
                <h1 className="alert-icon"><FontAwesomeIcon icon={ faExclamationTriangle }/></h1>
                <h2>Error</h2>
                <h4>The field of title cannot be empty</h4>
                <hr/>
                <button className="medium-button"
                        onClick={ this.handleAlert }>OK</button>
                </div>
            </div>
          </div>
        </div>
        ): null }

        <div className="container">
        <h2 className="sub-instruciton-title">Post a task</h2>
          <form className="signinform"
              onSubmit={this.handleSubmit}>
              <label className="label-font" htmlFor="title">Title</label>
              <div className="task-input-row">
                  <input type="test"
                          id="title"
                          onChange={this.handleChange}/>
              </div>
              <label className="label-font" htmlFor="expiryDate">Expiry Date</label>
              <div className="task-input-row">
                <MuiPickersUtilsProvider id="expiryDate" utils={DateFnsUtils}>
                    <div className="pickers">
                      <DateTimePicker id="inputdate" className="input-date browser-default" value={expiryDate} onChange={this.handleDateChange} />
                    </div>
                  </MuiPickersUtilsProvider>
              </div>
              <label className="label-font" htmlFor="expiryDate">Category</label>
              <div className="task-input-row">
                  <select value={this.state.value} name="" id="category" onChange={this.handleChange}>
                    <option value="trash">Trash</option>
                    <option value="clean">Clean</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="floor">Floor</option>
                    <option value="other">Other</option>
                  </select>
              </div>
              <label className="label-font" htmlFor="verifybyImage">Verification condition</label>
              <div className="checkbox-wrapper">
              <div className="task-checkboxinput-row">
                  <input data-test="createtask-checkbox" type="checkbox"
                          id="verifybyImage"
                          checked= {this.state.verifybyImage}
                          onChange={this.toggleChange}/>
                  <span  data-test="createtask-display-checked" className="checkmark"></span>
              </div>
              <div className="checkbox-text">Photo proof</div>
              </div>

              <label className="label-font" htmlFor="content">Description</label>
              <div className="textarea-row">
                  <textarea type="text"
                          id="content"
                          onChange={this.handleChange}/>
              </div>
              <div className="feature-row">
                  <button data-test="createtask-button"
                          onClick={this.handleBack} 
                          className="medium-square-button cancel-button">Back</button>
                  <button className="medium-square-button">Save</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    taskErr: state.task.err
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    createTask: (task) => dispatch(createTask(task)),
    confirmTaskAlert: ()=>dispatch(confirmTaskAlert())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatTask);
