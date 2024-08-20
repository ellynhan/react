import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Renderer  from './login/renderer';
//import  loginBox  from './login/loginbox';

class BaseRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Renderer} />
                </div>
            </Router>
        )
    }
}

export default BaseRouter;
