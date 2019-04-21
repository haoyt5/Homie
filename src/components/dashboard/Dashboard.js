import React, { Component } from 'react';
import TaskList from '../tasks/TaskList';
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 


class Dashboard extends Component {
    componentDidUpdate(){
        console.log( this.props)
    }
    render(){
        const { tasks, auth } = this.props
        // if (!auth.uid) return <Redirect to='/signin'/>
        if (auth.uid){
            return (
                <div className="dashboard-wrapper">
                    <div className="container">
                    
                        <h3 className="title">PENDING TASK</h3>
                        <TaskList task={ tasks } />
                    </div>
                </div>
            )
        } else {
            return (
                 <div className="landing-wrapper">
                       <div className="welcome-wrapper">
                           <div className="container">
                               <div className="col-2-1">
                                   <div className="logo-block">
                                       <div className="logo-holder expand-effect"><h2>●´∀`●</h2></div>
                                   </div>
                               </div>
                               <div className="col-2-1">
                                   <div className="campaign-block">
                                        <h1 className="campaign-block-title ">Start from <span className="brand">HOMIE</span><br/> Arrange houseworks easier.</h1>
                                        <p className="">Manage, collaborate and track the houseworks smart.  </p>
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth
    }
}

// export default  connect(mapStateToProps)(Dashboard);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' , orderBy:['createAt','desc']}
    ])
)(Dashboard);