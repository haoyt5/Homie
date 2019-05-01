import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, acceptTask } from '../store/actions/taskActions'
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
        const { expiryDate, author, content, title } = this.props.taskdetails.data
        console.log(expiryDate.toDate())
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <h2 className="sub-instruciton-title">Accept the Task</h2>
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | { expiryDate.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','') + " "+ expiryDate.toDate().toDateString() }</p>
                            <p className="expirydate">Posted by | {author}</p>
                            <p>{content}</p>
                            
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
        return (
            <div className="container">
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
  }
}
const mapStateToProps = (state, ownProps) => {
    // const id = ownProps.match.params.id
    // const tasks = state.firestore.data.tasks
    // const task = tasks ? tasks[id] : null
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

export default    connect(mapStateToProps,mapDispatchToProps)(TaskDetails);
// export default compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     firestoreConnect([
//         { collection: 'tasks' }
//     ])
// )(TaskDetails);
