import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Homepage from './components/Homepage'
import NavBar from './components/NavBar';
import UserComment from './components/UserComment';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/city" component={UserComment}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
