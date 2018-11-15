import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import SeriesSwitch from './Components/SeriesSwitch'
import axios from 'axios'

class SeriesSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { series: [] }
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/series').then(json => {
      this.setState({ series: json.data })
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
            return <SeriesSwitch key={series.id} name={series.name} />
          })}

          <div className="is-divider" />
        </section>
      </main>
    )
  }
}

export default SeriesSelect
