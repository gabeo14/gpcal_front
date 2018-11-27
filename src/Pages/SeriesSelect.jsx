import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import SeriesSwitch from './Components/SeriesSwitch'
import axios from 'axios'

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
      .get('https://localhost:5001/api/series')
      .then(json => {
        this.setState({ series: json.data })
      })
      .then(resp => {
        axios
          .get('https://localhost:5001/api/userpref/series', {
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
      <main className="seriesMain">
        {/* <h1 className="title is-1">Series</h1> */}
        <h4 className="title is-4">
          Select the series you would like to follow.
        </h4>
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
    )
  }
}

export default SeriesSelect
