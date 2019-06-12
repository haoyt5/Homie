import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTask, acceptTask } from '../store/actions/taskActions'
import PageLoader from '../layout/PageLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faQuestion} from '@fortawesome/free-solid-svg-icons'
export class TaskDetails extends Component {
    handleBack = (e) =>{
        e.preventDefault();
        window.location.href="#/"
      }
    handleAccept = (e)=> {
        this.props.acceptTask(this.props.match.params.id)
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
        const { createAt,assign, expiryDate, author, content, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <h2 className="sub-instruciton-title">Accept the Task</h2>
                    <div className="task-card">
                    <div className="expiry-row">
                                    <div className="expiry-col">
                                        <div className="expiry-assign-pic">
                                            <div className="expiry-picbox">
                                                <div className="expiry-picbox-inner">
                                                    <div className="card-img-holder" > <p><FontAwesomeIcon className="unassigned-mark" icon={ faQuestion }/></p></div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expiry-assign-name">
                                            <div className="assign-text"><span>Assigned to</span> </div>
                                            <div className="assign-content">{assign.assignedTo===null ? `???` :null}</div>
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
                    </div>
                </div>
                <div className="feature-row">
                <button onClick={this.handleBack} 
                        className="medium-square-button cancel-button">Back</button>
                <button onClick={this.handleAccept}
                        className="medium-square-button">Accept</button>
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
        acceptTask:(taskUid) => dispatch(acceptTask(taskUid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskDetails);