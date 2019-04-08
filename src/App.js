import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css'
//Components
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'

class App extends React.Component{
 

    render() {
        
        return(
              
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter> 


        );
    }
}

 export default App;
