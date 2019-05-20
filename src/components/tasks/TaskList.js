import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faQuestion, faStopwatch,faCamera } from '@fortawesome/free-solid-svg-icons';
import Loader from '../layout/Loader'
import EmptyCard from '../layout/EmptyCard'
class TaskList extends Component {
    
    render(){
        const { completeTasks, pendingTasks, assignedTasks, unassignedTasks }  = this.props
        return (
            <div className="tasklist-wapper">
                <div className="title-row">
                    <h3 className="row-title">UNASSIGNED</h3>
                    <Link to="/post" className="row-icon icon-row-button">
                    <h3><FontAwesomeIcon  icon={ faPlusSquare }/></h3>
                    <p className="row-feature-text" ></p>
                    </Link>
                </div>
                { this.props.fetchComplete ?  (this.props.unassignedTasks[0]  ?  ( <div className="container ">
                    {  unassignedTasks && unassignedTasks.map( task => {
                        return (
                            <Link className="card-hover" to={'/task/'+  task.id } key={ task.id } task={ task }>
                                <div className="task-card card-hover" >
                                    <div className="card-row ">
                                        <div className="col-pic">
                                            <div className="card-img-box u-dashed-border">
                                                <div className="card-img-box-inner">
                                                    <div className="card-img-holder">
                                                    <p><FontAwesomeIcon className="unassigned-mark" icon={ faQuestion }/></p>
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
                                            {task.data.verifybyImage ? (
                                                <div className="expiry-tag">
                                                    <div className="tag-icon">
                                                        <FontAwesomeIcon  icon={ faCamera }/>
                                                    </div>
                                                    <div className="tag-date">proof needed</div>
                                                </div>
                                            ): null }
                                                <div className="expiry-tag">
                                                    <div className="tag-icon">
                                                        <FontAwesomeIcon  icon={faStopwatch }/>
                                                    </div>
                                                    <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                            </div>
                        </Link>)
                    })
                 }</div>):<EmptyCard />) : <Loader /> }

                <div className="title-row"><h3 className="row-title">ASSIGNED</h3></div>
                { this.props.fetchComplete ? (this.props.assignedTasks[0] ? (
                    <div className="container ">
                    {  assignedTasks && assignedTasks.map( task => {
                            return (
                            <Link to={'/task/memo/'+  task.id } key={ task.id } task={task}>
                                <div className="task-card card-hover">
                                <div className="card-row">
                                    <div className="col-pic">
                                        <div className="card-img-box ">
                                            <div className="card-img-box-inner">
                                                { task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={ task.data.assign.assignedToURL } alt=""/> :  <div className="card-img-holder" style={{backgroundColor:task.data.assign.assignedToColor}}><p>{task.data.assign.assignedTo[0]}</p></div> }
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
                                            {task.data.verifybyImage ? (
                                                    <div className="expiry-tag">
                                                        <div className="tag-icon">
                                                            <FontAwesomeIcon  icon={ faCamera }/>
                                                        </div>
                                                        <div className="tag-date">proof needed</div>
                                                    </div>
                                                ): null }
                                            <div className="expiry-tag">
                                                <div className="tag-icon">
                                                    <FontAwesomeIcon  icon={ faStopwatch }/>
                                                </div>
                                                <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>  

                                </div>
                            </Link>
                            )
                        }) }
                    </div>
                ):<EmptyCard />): <Loader />}

                <div className="title-row"><h3 className="row-title">PENDING APPROVAL</h3></div>
                {this.props.fetchComplete ? ( this.props.pendingTasks[0] ? (
                        <div className="container ">
                        {  pendingTasks && pendingTasks.map( task => {
                                return (
                                <Link to={'/task/process/'+  task.id } key={ task.id } task={task}>
                                    <div className="task-card card-hover" >
                                        <div className="card-row">
                                            <div className="col-pic">
                                                <div className="card-img-box ">
                                                    <div className="card-img-box-inner">
                                                    {task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={ task.data.assign.assignedToURL } alt=""/> :  <div className="card-img-holder" style={{backgroundColor:task.data.assign.assignedToColor}}><p>{task.data.assign.assignedTo[0]}</p></div> }
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
                                                {task.data.verifybyImage ? (
                                                    <div className="expiry-tag">
                                                        <div className="tag-icon">
                                                            <FontAwesomeIcon  icon={ faCamera }/>
                                                        </div>
                                                        <div className="tag-date">proof needed</div>
                                                    </div>
                                                ): null }
                                                    <div className="expiry-tag">
                                                        <div className="tag-icon">
                                                            <FontAwesomeIcon  icon={ faStopwatch }/>
                                                        </div>
                                                        <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                                )
                            }) }
                    </div>):<EmptyCard /> ): <Loader />
                }
                <div className="title-row">
                    <h3 className="row-title">COMPLETE</h3>
                </div>
                { this.props.fetchComplete ? ( this.props.completeTasks[0] ? (
                    <div className="container ">
                        {  completeTasks && completeTasks.map( task => {
                                return (  
                                    <div className="task-card " key={ task.id } >
                                        <div className="card-row">
                                            <div className="col-pic">
                                                <div className="card-img-box ">
                                                    <div className="card-img-box-inner">
                                                    { task.data.assign.assignedToURL !== null ? <img className="card-img-holder" src={task.data.assign.assignedToURL} alt=""/> :  <div className="card-img-holder" style={ {backgroundColor:task.data.assign.assignedToColor} }><p>{task.data.assign.assignedTo[0]}</p></div> }
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
                                                { task.data.content.length !== 0 ?<p className="info-content">{ task.data.content }</p> : <p className="info-content u-invisible"> -- </p>} 
                                                <div className="info-end-row">
                                                { task.data.verifybyImage ? (
                                                    <div className="expiry-tag">
                                                        <div className="tag-icon">
                                                            <FontAwesomeIcon  icon={ faCamera }/>
                                                        </div>
                                                        <div className="tag-date">proof needed</div>
                                                    </div>
                                                ): null }
                                                    <div className="expiry-tag">
                                                        <div className="tag-icon">
                                                            <FontAwesomeIcon  icon={ faStopwatch }/>
                                                        </div>
                                                        <div className="tag-date">{ task.data.expiryDate.toDate().toDateString() }</div>
                                                    </div>

                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                )
                            }) }
                </div>): <EmptyCard /> ): <Loader /> }
            </div>
            
        )
    }
}

export default TaskList;