import React, { Component } from 'react'
import axios from 'axios'
import TimeLineItem from './Components/TimeLineItem.jsx'

class TimeLine extends Component {
  state = {
    profile: {},
    userSeries: []
  }

  doesLogin = () => {
    this.props.auth.login()
  }

  doesLogout = () => {
    this.props.auth.logout()
  }

  componentDidMount() {
    axios
      .get('https://localhost:5001/api/userpref', {
        headers: {
          Authorization: 'Bearer ' + this.props.auth.getAccessToken()
        }
      })
      .then(json => {
        this.setState({ userSeries: json.data })
      })
    //see if the user is logged in,
    //if logged in, then display the user's name
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    let items = Object.keys(this.state.userSeries).map(id => {
      let item = this.state.userSeries[id]
      return (
        <TimeLineItem
          key={item.id}
          eventTime={item.eventTime}
          title={item.title}
          seriesName={item.seriesName}
          type={item.type}
        />
      )
    })
    return (
      // Main component
      <div className="timeline">
        {/* header component */}
        <header className="timeline-header">
          <span className="tag is-medium is-primary">March 2018</span>
        </header>
        {/* header end */}
        {items}
        <button className="button is-light" onClick={this.doesLogin}>
          Log In
        </button>
        <button className="button is-light" onClick={this.doesLogout}>
          Log Out
        </button>
      </div>
    )
  }
}

export default TimeLine
