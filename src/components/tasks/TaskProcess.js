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
        const { createAt,content, expiryDate,pendingImgURL, assign, author, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <h2 className="sub-instruciton-title">Approve the Task</h2>
                    <div className="task-card">
                            <div className="expiry-row">
                                    <div className="expiry-col">
                                        <div className="expiry-assign-pic">
                                            <div className="expiry-picbox">
                                                <div className="expiry-picbox-inner">
                                                    { assign.assignedToURL !== null ? <img className="expiry-img" src={assign.assignedToURL} alt=""/> :<div className="card-img-holder" style={{backgroundColor:assign.assignedToColor}}><p>{assign.assignedTo[0]}</p></div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expiry-assign-name">
                                            <div className="assign-text"><span>Assigned to</span> </div>
                                            <div className="assign-content">{assign.assignedTo}</div>
                                        </div>
                                    </div>
                                    <div className="expiry-date-col">
                                        <div className="date-tag-time">{ expiryDate.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','').slice(0, 5)}</div>
                                        <div className="date-tag-date">
                                            <span className="date-tag-span">{expiryDate.toDate().toDateString()}</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="content-block">
                                    <h2 className="title">{title}</h2>
                                    <p className="main-content">{content}</p>
                                    </div>
                                    <div className="hr-row">
                                        <hr/>
                                    </div>
                                <div className="create-row">
                                        <span>{createAt.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','').slice(0, 5)}</span>・
                                        <span>{createAt.toDate().toDateString().slice(4, 15).replace( /\s+/g ,"/")}</span>・
                                    <span>{author}</span>
                                </div>
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