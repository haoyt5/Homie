import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createTask } from '../store/actions/taskActions'
export class CreatTask extends Component {
    state = {
        title: '',
        content: '',
        expiryDate: '',
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createTask(this.state);
        //after submit redidirect the user
        this.props.history.push('/')
    }
  render() {
    // console.log(this.props)
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
                <input type="text"
                        id="expiryDate"
                        onChange={this.handleChange}/>
            </div>
            <label className="label-font" htmlFor="content">Description</label>
            <div className="textarea-row">
                <textarea type="text"
                        id="content"
                        onChange={this.handleChange}/>
            </div>
            <div className="feature-row">
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
