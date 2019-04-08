import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
class App extends React.Component{
 

    render() {
        
        return(
              
        <BrowserRouter>
            <div className="app">
                <h1>Homie</h1>
            </div>
        </BrowserRouter> 


        );
    }
}

 export default App;