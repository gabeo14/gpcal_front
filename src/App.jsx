import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'
import NavBar from './NavBar.jsx'
import TimeLine from './TimeLine.jsx'
import SeriesSelect from './SeriesSelect.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={TimeLine} />
            <Route path="/seriesselect" component={SeriesSelect} />
            <TimeLine />
            <SeriesSelect />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
