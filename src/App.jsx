import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'
import NavBar from './NavBar.jsx'
import TimeLine from './TimeLine.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" Component={TimeLine} />
            <TimeLine />
          </Switch>
          <main className="seriesMain">
            <h2>Series</h2>
            <section className="seriesSection">
              <div className="seriesSwitch">
                <p>Formula 1</p>
                <div className="field switch">
                  <input
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                  />
                  <label for="switchRoundedDefault" />
                </div>
              </div>
              <div className="is-divider" />
              <div className="seriesSwitch">
                <p>Formula E</p>
                <div className="field switch">
                  <input
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                  />
                  <label for="switchRoundedDefault" />
                </div>
              </div>
              <div className="is-divider" />
              <div className="seriesSwitch">
                <p>World Endurance Championship</p>
                <div className="field switch">
                  <input
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                  />
                  <label for="switchRoundedDefault" />
                </div>
              </div>
              <div className="is-divider" />
              <div className="seriesSwitch">
                <p>MotoGP</p>
                <div className="field switch">
                  <input
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                  />
                  <label for="switchRoundedDefault" />
                </div>
              </div>
              <div className="is-divider" />
              <div className="seriesSwitch">
                <p>Indy Car</p>
                <div className="field switch">
                  <input
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                  />
                  <label for="switchRoundedDefault" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
