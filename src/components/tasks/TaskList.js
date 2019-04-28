import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
class TaskList extends Component {
    render(){
        const { completeTasks, pendingTasks, assignedTasks, unassignedTasks, task }  = this.props
        return (
            <div className="tasklist-wapper">
            {/* <h3 className="title">EXAMPLE</h3>
                <div className="container">
                    <Link>
                    <div className="task-card">
                        <h3>掃地</h3>
                        <p className="expirydate">
                            <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                        </p>
                        <p>把地掃乾淨</p>
                        <span className="expirydate-title">Posted by | 黑貓</span>
                        <span className="expirydate-title">Posted at | Fri Apr 20 2019</span>
                    </div>
                    </Link>
                </div> */}
                <h3 className="title">UNASSIGNED TASK</h3>
                {this.props.unassignedTasks[0] ? (
                <div className="container ">
                {  unassignedTasks && unassignedTasks.map( task => {
                        return (
                        <Link to={'/task/'+  task.id } key={ task.id } task={task}>
                            <div className="task-card" >
                                <h3>{ task.data.title }</h3>
                                <p className="expirydate">
                                <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                </p>
                                <p>{ task.data.content }</p>
                                <span className="expirydate-title">Posted by | { task.data.author } </span>
                                <span className="expirydate-title">Posted at | { task.data.createAt.toDate().toDateString() }</span>
                            </div>
                        </Link>
                        )
                    }) }
                </div>
                ) :(
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}

                <h3 className="title">PENDING TASK</h3>
                {this.props.pendingTasks[0]?(
                    <div className="container ">
                    {  pendingTasks && pendingTasks.map( task => {
                            return (
                            <Link to={'/task/process/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card" >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                    </p>
                                    <p>{ task.data.content }</p>
                                    <span className="expirydate-title">Posted by | { task.data.author } </span>
                                    <span className="expirydate-title">Assigned to | { task.data.assign.assignedTo } </span>
                                    <span className="expirydate-title">Posted at | { task.data.createAt.toDate().toDateString() }</span>
                                </div>
                            </Link>
                            )
                        }) }
                </div>
                ):(
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}
                <h3 className="title">TASK COMPLETE</h3>
                {this.props.completeTasks[0] ? (
                <div className="container ">
                    {  completeTasks && completeTasks.map( task => {
                            return (
                                <div className="task-card" >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                    </p>
                                    <p>{ task.data.content }</p>
                                    <span className="expirydate-title">Posted by | { task.data.author } </span>
                                    <span className="expirydate-title">Assigned to | { task.data.assign.assignedTo } </span>
                                    <span className="expirydate-title">Posted at | { task.data.createAt.toDate().toDateString() }</span>
                                </div>

                            )
                        }) }
                    </div>
                ):( 
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}
                <h3 className="title">ASSIGNED TASK</h3>
                {this.props.assignedTasks[0] ? (
                <div className="container ">
                    {  assignedTasks && assignedTasks.map( task => {
                            return (
                            <Link to={'/task/memo/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card" >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                    </p>
                                    <p>{ task.data.content }</p>
                                    <span className="expirydate-title">Posted by | { task.data.author } </span>
                                    <span className="expirydate-title">Assigned to | { task.data.assign.assignedTo } </span>
                                    <span className="expirydate-title">Posted at | { task.data.createAt.toDate().toDateString() }</span>
                                </div>
                            </Link>
                            )
                        }) }
                    </div>
                ):( 
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}

                {/* <h3 className="title">All TASK</h3>
                <div className="container ">
                {  task && task.map( task => {
                        return (
                        <Link to={'/task/'+  task.id } key={ task.id } task={task}>
                            <div className="task-card" >
                                <h3>{ task.data.title }</h3>
                                <p className="expirydate">
                                <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                </p>
                                <p>{ task.data.content }</p>
                                <span className="expirydate-title">Posted by | { task.data.author } </span>
                                <span className="expirydate-title">Posted at | { task.data.createAt.toDate().toDateString() }</span>
                            </div>
                        </Link>
                        )
                    }) }
                </div> */}

            </div>
            
        )
    }
}

export default TaskList;