import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar';
import CityPage from './components/CityPage'

class App extends Component {


  renderCityPage = (props) => (
    <CityPage {...props}/>
  )

  render() {
    return <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Homepage} />
            <Route path="/cities/:id" render={this.renderCityPage} />
            </Switch>
          </div>
        </Router>
      </div>;
  }
}

export default App;
