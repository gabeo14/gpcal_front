import React, { Component } from 'react'

class SeriesSwitch extends Component {
  render() {
    return (
      <>
        <div className="is-divider" />
        <div className="seriesSwitch">
          <p>{this.props.name}</p>
          <div className="field switch">
            <input
              type="checkbox"
              name="switchRoundedDefault"
              className="switch is-rounded"
            />
            <label for="switchRoundedDefault" />
          </div>
        </div>
      </>
    )
  }
}

export default SeriesSwitch
