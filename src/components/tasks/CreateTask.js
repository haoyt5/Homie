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
      <h3 className="title">POST A TASK</h3>
        <form className="signinform"
             onSubmit={this.handleSubmit}>
            <div className="input-row">
                <label htmlFor="title">Title</label>
                <input type="test"
                        id="title"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text"
                        id="expiryDate"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <label htmlFor="content">Description</label>
                <textarea type="text"
                        id="content"
                        onChange={this.handleChange}/>
            </div>
            <div className="input-row">
                <button className="btn login-btn">SAVE</button>
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
