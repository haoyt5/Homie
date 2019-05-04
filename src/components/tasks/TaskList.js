import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class TaskList extends Component {
    
    render(){
        const { completeTasks, pendingTasks, assignedTasks, unassignedTasks }  = this.props
        return (
            <div className="tasklist-wapper">
                {/* <div className="container">
                    <div className="empty-card">
                    </div>
                </div> */}
                <div className="title-row">
                    <h3 className="row-title">UNASSIGNED</h3>
                    <Link to="/post" className="row-icon icon-row-button">
                    <h3><FontAwesomeIcon  icon={faPlusSquare }/></h3>
                    <p>Add another Task</p>
                    </Link>
                </div>

                {this.props.unassignedTasks[0] ? (
                
                <div className="container ">
                {  unassignedTasks && unassignedTasks.map( task => {
                        return (
                        <Link to={'/task/'+  task.id } key={ task.id } task={task}>
                            <div className="task-card" >
                                <h3>{ task.data.title }</h3>
                                <p className="expirydate">
                                <span className="expirydate-title">Expiry Date | {task.data.expiryDate.toDate().toDateString()} </span>
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
                <div className="title-row">
                    <h3 className="row-title">ASSIGNED</h3>
                </div>
                {this.props.assignedTasks[0] ? (
                <div className="container ">
                    {  assignedTasks && assignedTasks.map( task => {
                            return (
                            <Link to={'/task/memo/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card" >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date | { task.data.expiryDate.toDate().toDateString() } </span>
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
                <h3 className="title">PENDING APPROVAL</h3>
                {this.props.pendingTasks[0]?(
                    <div className="container ">
                    {  pendingTasks && pendingTasks.map( task => {
                            return (
                            <Link to={'/task/process/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card" >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date |{ task.data.expiryDate.toDate().toDateString() }</span>
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
                <h3 className="title">COMPLETE</h3>
                {this.props.completeTasks[0] ? (
                <div className="container ">
                    {  completeTasks && completeTasks.map( task => {
                            return (
                                <div className="task-card" key={ task.id } >
                                    <h3>{ task.data.title }</h3>
                                    <p className="expirydate">
                                    <span className="expirydate-title">Expiry Date |{ task.data.expiryDate.toDate().toDateString() }</span>
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