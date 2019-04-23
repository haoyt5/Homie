import React, { Component } from 'react';
// import { compose } from 'redux';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { fetchTask } from '../store/actions/taskActions'
export class TaskDetails extends Component {

    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }
  render() {
    const id = this.props.match.params.id
    if (this.props.taskdetails.data){
        const { author, content, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | Wed</p>
                            <p className="expirydate">Posted by | {author}</p>
                            <p>{content}</p>
                            <button>Accept</button>
                    </div>
                </div>
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
        fetchTask: (taskUid) => dispatch(fetchTask(taskUid)) 
    }
}

export default    connect(mapStateToProps,mapDispatchToProps)(TaskDetails);
// export default compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     firestoreConnect([
//         { collection: 'tasks' }
//     ])
// )(TaskDetails);
