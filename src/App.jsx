import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <img src="images/name.png" alt="logo" />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="motoCalNavBar"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="motoCalNavBar" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Schedule by Series</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Formula 1</a>
                  <a className="navbar-item">Formula E</a>
                  <a className="navbar-item">World Endurance Championship</a>
                  <a className="navbar-item">Indy Car</a>
                </div>
              </div>
              <a className="navbar-item">About</a>
              <a className="navbar-item">Game</a>
              <a className="navbar-item">Settings</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default App
