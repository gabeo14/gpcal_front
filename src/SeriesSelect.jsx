import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class SeriesSelect extends Component {
  state = {}
  render() {
    return (
      <main className="seriesMain">
        {/* <h1 className="title is-1">Series</h1> */}
        <h4 className="title is-4">
          Select the series you would like to follow.
        </h4>
        <div className="is-divider" />
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
          <div className="is-divider" />
        </section>
      </main>
    )
  }
}

export default SeriesSelect
