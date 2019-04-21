import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
class TaskList extends Component {
    render(){
        const { task }  = this.props
        return (
            <div className="tasklist-wapper">
                <div className="container ">
                {  task && task.map( task => {
                        return (
                        <Link to={'/task/'+  task.id } key={ task.id }>
                            <div className="task-card" >
                                <h3>{ task.title }</h3>
                                <p className="expirydate">
                                <span className="expirydate-title">Expiry Date | Wed 25 / 04 / 2019 </span>
                                </p>
                                <p>{ task.content }</p>
                                <span className="expirydate-title">Posted by | { task.author } </span>
                                <span className="expirydate-title">Posted at | { task.createAt.toDate().toDateString() }</span>
                            </div>
                        </Link>
                        )
                    }) }

                </div>
            </div>
        )
    }
}

export default TaskList;