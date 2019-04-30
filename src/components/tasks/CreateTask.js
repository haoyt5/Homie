import React, { Component } from 'react'


import { connect } from 'react-redux'
import { createTask } from '../store/actions/taskActions'

import DateFnsUtils from "@date-io/date-fns";
import {  MuiPickersUtilsProvider, DateTimePicker } from "material-ui-pickers";
export class CreatTask extends Component {
    state = {
        title: '',
        content: '',
        category:'trash',
        expiryDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    }
    handleBack = (e) =>{
      e.preventDefault();
      window.location.href="#/"
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleDateChange = date => {
      this.setState({ expiryDate: date });
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        // this.props.createTask(this.state);
        //after submit redidirect the user
        // this.props.history.push('/')
    }
  render() {
    // console.log(this.props)
    const { expiryDate } = this.state;
    return (
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
              <MuiPickersUtilsProvider id="expiryDate"  utils={DateFnsUtils}>
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
            <label className="label-font" htmlFor="content">Description</label>
            <div className="textarea-row">
                <textarea type="text"
                        id="content"
                        onChange={this.handleChange}/>
            </div>
            <div className="feature-row">
                <button onClick={this.handleBack} 
                        className="medium-square-button cancel-button">Back</button>
                <button className="medium-square-button">Save</button>
            </div>
        </form>

      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {

//   }
// }
const mapDispatchToProps = (dispatch) => {
  return{
    createTask: (task) => dispatch(createTask(task))
  }
}
export default connect(null, mapDispatchToProps)(CreatTask);
