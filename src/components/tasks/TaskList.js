import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faQuestion, faStopwatch,faMapPin } from '@fortawesome/free-solid-svg-icons';

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
                        <Link className="card-hover" to={'/task/'+  task.id } key={ task.id } task={task}>
                            <div className="task-card card-hover" >
                                <div className="card-row">
                                    <div className="col-pic">
                                        <div className="card-img-box u-dashed-border">
                                            <div className="card-img-box-inner">
                                                <div className="card-img-holder">
                                                <p><FontAwesomeIcon icon={faQuestion}/></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info">
                                        <div className="info-title-row">
                                            <h3 className="card-title">{ task.data.title }</h3>
                                            <div className="create-tag">
                                                <p className="card-create-time">
                                                    { task.data.createAt.toDate().toDateString() }</p>
                                                <p className="author-tag">{ task.data.author } </p>
                                            </div>
                                           
                                        </div>                                       
                                        {task.data.content.length !== 0 ?<p className="info-content">{ task.data.content }</p> : <p className="info-content u-invisible"> -- </p>} 
                                        <div className="info-end-row">
                                            <p className="expiry-tag">
                                                <div className="tag-icon">
                                                    <FontAwesomeIcon  icon={faStopwatch }/>
                                                </div>
                                                <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                

                                
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
                                <div className="task-card card-hover">
                                <div className="card-row">
                                    <div className="col-pic">
                                        <div className="card-img-box ">
                                            <div className="card-img-box-inner">
                                                {task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={task.data.assign.assignedToURL} alt=""/> :  <div className="card-img-holder" style={{backgroundColor:task.data.assign.assignedToColor}}><p>{task.data.assign.assignedTo[0]}</p></div> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info">
                                        <div className="info-title-row">
                                            <h3 className="card-title">{ task.data.title }</h3>
                                            <div className="create-tag">
                                                <p className="card-create-time">
                                                    { task.data.createAt.toDate().toDateString() }</p>
                                                <p className="author-tag">{ task.data.author } </p>
                                            </div>
                                           
                                        </div>                                       
                                        {task.data.content.length !== 0 ?<p className="info-content">{ task.data.content }</p> : <p className="info-content u-invisible"> -- </p>} 
                                        <div className="info-end-row">
                                            <p className="expiry-tag">
                                                <div className="tag-icon">
                                                    <FontAwesomeIcon  icon={faStopwatch }/>
                                                </div>
                                                <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                            </p>

                                        </div>
                                    </div>
                                </div>  

                                </div>
                            </Link>
                            )
                        }) }
                    </div>
                ):( 
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}
                <div className="title-row">
                    <h3 className="row-title">PENDING APPROVAL</h3>
                </div>
                {this.props.pendingTasks[0]?(
                    <div className="container ">
                    {  pendingTasks && pendingTasks.map( task => {
                            return (
                            <Link to={'/task/process/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card card-hover" >
                                    <div className="card-row">
                                        <div className="col-pic">
                                            <div className="card-img-box ">
                                                <div className="card-img-box-inner">
                                                {task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={task.data.assign.assignedToURL} alt=""/> :  <div className="card-img-holder" style={{backgroundColor:task.data.assign.assignedToColor}}><p>{task.data.assign.assignedTo[0]}</p></div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-info">
                                            <div className="info-title-row">
                                                <h3 className="card-title">{ task.data.title }</h3>
                                                <div className="create-tag">
                                                    <p className="card-create-time">
                                                        { task.data.createAt.toDate().toDateString() }</p>
                                                    <p className="author-tag">{ task.data.author } </p>
                                                </div>
                                            
                                            </div>                                       
                                            {task.data.content.length !== 0 ?<p className="info-content">{ task.data.content }</p> : <p className="info-content u-invisible"> -- </p>} 
                                            <div className="info-end-row">
                                                <p className="expiry-tag">
                                                    <div className="tag-icon">
                                                        <FontAwesomeIcon  icon={faStopwatch }/>
                                                    </div>
                                                    <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                                </p>
                                            </div>
                                      </div>
                                    </div>
                 
                                </div>
                            </Link>
                            )
                        }) }
                </div>
                ):(
                <div className="container">
                    <div className="empty-card"></div>
                </div>)}
                <div className="title-row">
                    <h3 className="row-title">COMPLETE</h3>
                </div>
                {this.props.completeTasks[0] ? (
                <div className="container ">
                    {  completeTasks && completeTasks.map( task => {
                            return (
                                
                                <div className="task-card " key={ task.id } >
                                    <div className="card-row">
                                        <div className="col-pic">
                                            <div className="card-img-box ">
                                                <div className="card-img-box-inner">
                                                {task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={task.data.assign.assignedToURL} alt=""/> :  <div className="card-img-holder" style={{backgroundColor:task.data.assign.assignedToColor}}><p>{task.data.assign.assignedTo[0]}</p></div> }
                                                </div>
                                            </div>
                                        </div>
                                            <div className="col-info">
                                            <div className="info-title-row">
                                                <h3 className="card-title">{ task.data.title }</h3>
                                                <div className="create-tag">
                                                    <p className="card-create-time">
                                                        { task.data.createAt.toDate().toDateString() }</p>
                                                    <p className="author-tag">{ task.data.author } </p>
                                                </div>
                                            
                                            </div>                                       
                                            {task.data.content.length !== 0 ?<p className="info-content">{ task.data.content }</p> : <p className="info-content u-invisible"> -- </p>} 
                                            <div className="info-end-row">
                                                <p className="expiry-tag">
                                                    <div className="tag-icon">
                                                        <FontAwesomeIcon  icon={faStopwatch }/>
                                                    </div>
                                                    <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                                </p>

                                            </div>
                                            </div>
                                    </div>
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