import React, { Component } from 'react'
import axios from 'axios'
import TimeLineItem from './Components/TimeLineItem.jsx'
import moment from 'moment-timezone'

class TimeLine extends Component {
  state = {
    profile: {},
    userSeries: [],
    noneFollowed: true,
    localZone: ''
  }

  doesLogin = () => {
    this.props.auth.login()
  }

  doesLogout = () => {
    this.props.auth.logout()
  }

  componentDidMount() {
    this.guessZone()
    axios
      .get('https://localhost:5001/api/userpref', {
        headers: {
          Authorization: 'Bearer ' + this.props.auth.getAccessToken()
        }
      })
      .then(json => {
        this.setState({ userSeries: json.data }, () => {
          this.followedCheck()
        })
      })
    //see if the user is logged in,
    //if logged in, then display the user's name
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  followedCheck = () => {
    this.setState({ noneFollowed: !(this.state.userSeries.length > 0) })
  }

  guessZone = () => {
    this.setState({ localZone: moment.tz.guess() })
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
        {this.state.noneFollowed && (
          <div>
            <h2 className="title is-2">Not following any series?</h2>
            {/* <button className="button is-danger" onClick={this.doesLogin}>
            Click Here
          </button> */}
            <a href="/seriesselect" className="button is-danger">
              Click Here
            </a>
          </div>
        )}
        <button className="button is-light" onClick={this.doesLogout}>
          Log Out
        </button>
      </div>
    )
  }
}

export default TimeLine
