import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SplashPage extends Component {
  doesLogin = () => {
    this.props.auth.login()
  }

  render() {
    return (
      <section className="is-medium is-dark is-bold">
        <div className="container splash">
          <img
            src="images/logo.png"
            alt="gpcal logo"
            className="is-responsive logo is-centered"
          />
          <button className="button is-light" onClick={this.doesLogin}>
            Log In
          </button>
        </div>
      </section>
    )
  }
}

export default SplashPage
