import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app'
class wrapper extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <App/>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
