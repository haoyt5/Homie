import React, { Component } from 'react'
import TaskList from '../tasks/TaskList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' 


class Dashboard extends Component {
    componentDidUpdate(){
        // console.log( this.props.tasks)
    }
    render(){
        const { tasks } = this.props
        // console.log('render裡的', this.props.tasks)
        return (
            <div className="dashboard-wapper">
                <div className="container">
                    <h3 className="title">PENDING TASK</h3>
                    <TaskList task={ tasks } />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.firestore.ordered.tasks
    }
}

// export default  connect(mapStateToProps)(Dashboard);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' , orderBy:['createAt','desc']}
    ])
)(Dashboard);