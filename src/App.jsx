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

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

class App extends Component {
  doesLogin = () => {
    auth.login()
  }

  doesLogout = () => {
    auth.logout()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/splashpage" component={SplashPage} />
            <Route
              path="/"
              render={props => <TimeLine auth={auth} {...props} />}
            />
            <Route path="/seriesselect" component={SeriesSelect} />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props)
                return <Callback {...props} />
              }}
            />
          </Switch>
          <button className="button is-light" onClick={this.doesLogin}>
            Log In
          </button>
          <button className="button is-light" onClick={this.doesLogout}>
            Log Out
          </button>
        </div>
      </Router>
    )
  }
}

export default App
