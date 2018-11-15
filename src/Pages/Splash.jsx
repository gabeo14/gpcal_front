import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SplashPage extends Component {
  doesLogin = () => {
    this.props.auth.login()
  }

  render() {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Lets find some coffee shops</h1>
            <h2 className="subtitle">
              <button className="button is-light" onClick={this.doesLogin}>
                Log In
              </button>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default SplashPage
