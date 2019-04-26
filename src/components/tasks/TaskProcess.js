import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, approveTask } from '../store/actions/taskActions'

export class TaskProcess extends Component {
    handleApprove = (e) => {
        const { assign } = this.props.taskdetails.data
        this.props.approveTask(this.props.match.params.id,assign)
    }
    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }
  render() {
    const id = this.props.match.params.id
    if (this.props.taskdetails.data){
        const { assign, author, content, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | Wed</p>
                            <p className="expirydate">Assigned to | {assign.assignedTo}</p>
                            <p className="expirydate">Posted by | {author}</p>
                            <p>{content}</p>
                            
                    </div>
                </div>
                <button onClick={this.handleApprove}>Approve</button>
            </div>
           
        )
    } else {
        return (
            <div className="container">
                <p>Loading ...</p>
            </div>
        )
    }
  }
}
const mapStateToProps = (state, ownProps) => {
    const taskdetails = state.task.taskData ? state.task.taskData : null
    return {
        taskdetails: taskdetails
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        fetchTask: (taskUid) => dispatch(fetchTask(taskUid)),
        approveTask:(taskUid,assign)=>dispatch(approveTask(taskUid,assign))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(TaskProcess);