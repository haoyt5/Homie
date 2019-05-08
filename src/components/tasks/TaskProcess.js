import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, approveTask } from '../store/actions/taskActions'
import PageLoader from '../layout/PageLoader'
export class TaskProcess extends Component {
    handleBack = (e) =>{
        e.preventDefault();
        window.location.href="#/"
      }
    handleApprove = (e) => {
        const { assign } = this.props.taskdetails.data
        this.props.approveTask(this.props.match.params.id,assign)
    }
    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.fetchTask()
    }
  render() {
    const id = this.props.match.params.id
    if (this.props.taskdetails.data){
        const { content, expiryDate,pendingImgURL, assign, author, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <h2 className="sub-instruciton-title">Approve the Task</h2>
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | { expiryDate.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','') + " "+ expiryDate.toDate().toDateString() }</p>
                            <p className="expirydate">Assigned to | {assign.assignedTo}</p>
                            <p className="expirydate">Posted by | {author}</p>
                            <p className="expirydate">Description</p>
                                <p>{content}</p>
                            {pendingImgURL ? (
                                <div>
                                <p className="expirydate">Image attachment</p>
                                <div className="image-row">
                                    <div className="image-box">
                                        <div className="image-box-inner">
                                        <img className="" src={pendingImgURL} alt=""/> 
                                        </div>
                                    </div>
                                 </div>
                                </div>
                            ):null
                            }
                            
                    </div>
                </div>
                <div className="feature-row">
                <button onClick={this.handleBack} 
                        className="medium-square-button cancel-button">Back</button>
                <button onClick={this.handleApprove}
                        className="medium-square-button">Approve</button>
                </div>
                
            </div>
           
        )
    } else {
        return <PageLoader />
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