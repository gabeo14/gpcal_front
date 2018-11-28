import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import SeriesSwitch from './Components/SeriesSwitch'
import axios from 'axios'
import NavBar from './Components/NavBar.jsx'
import config from '../Config'

class SeriesSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { series: [], userSeries: [] }
  }

  checkCheck = seriesId => {
    return this.state.userSeries
      .map(series => series.seriesId)
      .includes(seriesId)
  }

  componentDidMount() {
    axios
      .get(`${config.API_URL}/series`)
      .then(json => {
        this.setState({ series: json.data })
      })
      .then(resp => {
        axios
          .get(`${config.API_URL}/userpref/series`, {
            headers: {
              Authorization: 'Bearer ' + this.props.auth.getAccessToken()
            }
          })
          .then(json => {
            this.setState({
              userSeries: json.data
            })
          })
      })
  }

  render() {
    return (
      <div>
        <NavBar auth={this.props.auth} />
        <main className="seriesMain">
          {/* <h1 className="title is-1">Series</h1> */}
          <h2 className="title is-2">
            Select the series you would like to follow.
          </h2>
          <section className="seriesSection">
            {this.state.series.map(series => {
              return (
                <SeriesSwitch
                  key={series.id}
                  name={series.name}
                  seriesId={series.id}
                  auth={this.props.auth}
                  isChecked={this.checkCheck(series.id)}
                />
              )
            })}

            <div className="is-divider" />
          </section>
        </main>
      </div>
    )
  }
}

export default SeriesSelect
