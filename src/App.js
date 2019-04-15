import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css'

// Components
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateTask from'./components/tasks/CreateTask'
import TaskDetails from './components/tasks/TaskDetails'
class App extends React.Component{
 

    render() {
        
        return(
              
        <BrowserRouter basename="/Homie">
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/task/:id" component={TaskDetails} />
                    <Route path="/signup" component={ ()=>  <SignUp/> }/>
                    <Route path="/post" component={CreateTask} />
                </Switch>
            </div>
        </BrowserRouter> 

        );
    }
}

 export default App;
