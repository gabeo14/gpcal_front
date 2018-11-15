import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'
import NavBar from './Pages/Components/NavBar.jsx'
import TimeLine from './Pages/TimeLine.jsx'
import SeriesSelect from './Pages/SeriesSelect.jsx'
import Callback from './Pages/Callback.jsx'
import SplashPage from './Pages/Splash.jsx'
import Auth from './Auth/Auth.js'

const auth = new Auth()

class App extends Component {
  doesLogin = () => {
    auth.login()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/splashpage" component={SplashPage} />
            <Route exact path="/" component={TimeLine} />
            <Route path="/seriesselect" component={SeriesSelect} />
            <Route path="/callback" exact component={Callback} />
          </Switch>
          <button className="button is-light" onClick={this.doesLogin}>
            Log In
          </button>
        </div>
      </Router>
    )
  }
}

export default App
