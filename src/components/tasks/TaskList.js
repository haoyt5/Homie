import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
class TaskList extends Component {
    render(){
        const { task }  = this.props
        return (
            <div className="tasklist-wapper">
                <div className="container ">
                { task && task.map( task => {
                        return (
                        <Link to={'/task/'+  task.id } key={ task.id }>
                            <div className="task-card" >
                                <h3>{ task.title }</h3>
                                <p className="expirydate">
                                <span className="expirydate-title">Expiry Date </span>
                                Wed 19 / 04 / 2019
                                </p>
                                <p>{ task.content }</p>
                            </div>
                        </Link>
                        )
                    }) }
                    <div className="task-card">
                    <h3>123</h3>
                    <p className="expirydate">
                    <span className="expirydate-title">Expiry Date </span>
                    Wed 19 / 04 / 2019
                    </p>
                    <p> contetns</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;