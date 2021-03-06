import React from 'react'
import { HashRouter , Switch, Route} from 'react-router-dom'
import './index.css'

// Components
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateTask from'./components/tasks/CreateTask'
import TaskDetails from './components/tasks/TaskDetails'
import TaskMemo from './components/tasks/TaskMemo'
import TaskProcess from './components/tasks/TaskProcess'
import SignGroup from './components/auth/SignGroup'



class App extends React.Component{

    render() {
        
        return(
        <HashRouter  >
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/signin" component={SignIn} />
                    <Route exact path="/task/:id" component={TaskDetails} />
                    <Route exact path="/task/memo/:id" component={TaskMemo} />
                    <Route exact path="/task/process/:id" component={TaskProcess} />
                    <Route path="/signup" component={ ()=>  <SignUp/> }/>
                    <Route path="/post" component={CreateTask} />
                    <Route path="/signgroup" component={SignGroup} />
                </Switch>
            </div>
        </HashRouter> 
        );
    }
}

 export default App;
