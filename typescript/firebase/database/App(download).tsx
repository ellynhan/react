import React, { Component } from 'react';
import fire from './components/fire';
import Chat from './components/up';
import Users from './components/down';
import {Route, BrowserRouter as Router,BrowserRouter, Link} from 'react-router-dom';


class App extends Component<any,any> {
  constructor(props:any){
    super(props);
  }
  public render() {
    return(/*
      <div>
        <Router>
          <Route path="/up" component={Chat} />  
        </Router>
      </div>
      */
    <div>
        <Users/>
    </div>
    );
  }
}
export default App;
