import React, { Component } from 'react'

class NavBar extends Component {
  state = {
    burgClass: '',
    dropClass: 'hidden'
  }

  doesLogout = () => {
    this.props.auth.logout()
  }

  _burgerClick = event => {
    console.log('CLICKED BITCH')
    if (this.state.burgClass === '') {
      this.setState({ burgClass: 'is-active' })
    } else {
      this.setState({ burgClass: '' })
    }
  }

  _dropClick = event => {
    console.log('CLICKED BITCH')
    if (this.state.dropClass === '') {
      this.setState({ dropClass: 'hidden' })
    } else {
      this.setState({ dropClass: '' })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src="images/name.png" alt="logo" />
          </a>

          <a
            role="button"
            className={`${this.state.burgClass} navbar-burger burger`}
            aria-label="menu"
            aria-expanded="false"
            data-target="gpCalNavBar"
            onClick={this._burgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="gpCalNavBar" className={`${this.state.burgClass}navbar-menu`}>
          <div className="navbar-start">
            <a href="/home" className="navbar-item">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" onClick={this._dropClick}>
                Schedule by Series
              </a>
              <div className={`${this.state.dropClass} navbar-dropdown`}>
                <a className="navbar-item">Formula 1</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Formula E</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">World Endurance Championship</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Indy Car</a>
              </div>
            </div>
            <a className="navbar-item">About</a>
            <a href="/seriesselect" className="navbar-item">
              Settings
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-dark" onClick={this.doesLogout}>
                  <strong>Logout</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
