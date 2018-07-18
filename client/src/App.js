import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
