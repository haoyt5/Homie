import React, { Component } from 'react'
class TaskList extends Component {
    render(){
        const { task }  = this.props
        return (
            <div className="tasklist-wapper">
                <div className="container ">
                { task && task.map( task => {
                        return (
                        <div className="task-card" key={ task.id }>
                            <h3>{ task.title }</h3>
                            <p className="expirydate">
                            <span className="expirydate-title">Expiry Date </span>
                            Wed 19 / 04 / 2019
                            </p>
                            <p>{ task.content }</p>
                         </div>
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