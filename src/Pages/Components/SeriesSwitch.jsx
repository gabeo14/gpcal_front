import React, { Component } from 'react'

class SeriesSwitch extends Component {
  state = {
    checked: ''
  }

  _clickCheck = event => {
    console.log('clicked bro')
    if (this.state.checked === '') {
      this.setState({ checked: 'checked' })
    } else {
      this.setState({ checked: '' })
    }
  }

  render() {
    return (
      <>
        <div className="is-divider" />
        <div className="seriesSwitch" onClick={this._clickCheck}>
          <p>{this.props.name}</p>
          <div className="field switch">
            <input
              type="checkbox"
              name="switchRoundedDefault"
              className="switch is-rounded"
              onChange={this._clickCheck}
              checked={this.state.checked}
            />
            <label htmlFor="switchRoundedDefault" />
          </div>
        </div>
      </>
    )
  }
}

export default SeriesSwitch
