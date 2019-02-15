import React from 'react';
import {Route, BrowserRouter as Router,BrowserRouter, Link} from 'react-router-dom';
import up from './up';
class Down extends React.Component{
    render(){
        return(
            <div>
                <Link to="/up"><button>goto register page</button></Link>
                <Route path="/up" component={up} />
            </div>
        );
    }
}

export default Down;