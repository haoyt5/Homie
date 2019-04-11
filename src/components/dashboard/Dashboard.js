import React, { Component } from 'react'
import TaskList from '../tasks/TaskList'
class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard-wapper">
                <div className="container">1
                    <TaskList />
                </div>
            </div>
        )
    }
}

export default Dashboard;