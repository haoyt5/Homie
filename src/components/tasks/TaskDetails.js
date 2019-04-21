import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
export class TaskDetails extends Component {

  render() {
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    if (this.props.task){
        const { author, content, title } = this.props.task
        // console.log(author, content, title)
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
const mapStateToprops = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    const id = ownProps.match.params.id
    const tasks = state.firestore.data.tasks
    const task = tasks ? tasks[id] : null
    return {
        task: task
    }
}
export default compose(
    connect(mapStateToprops),
    firestoreConnect([
        { collection: 'tasks' }
    ])
)(TaskDetails);
