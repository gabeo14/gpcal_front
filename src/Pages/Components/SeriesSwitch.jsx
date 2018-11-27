import React, { Component } from 'react'
import axios from 'axios'

class SeriesSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.isChecked ? 'checked' : ''
    }
  }

  _clickCheck = () => {
    // console.log('clicked bro')
    if (this.state.checked === '') {
      this.setState({ checked: 'checked' }, this._addFollow)
    } else {
      this.setState({ checked: '' }, this._removeFollow)
    }
  }

  _addFollow = () => {
    // creating
    console.log('following', this.props.seriesId)
    axios
      .post(
        'https://localhost:5001/api/userpref',
        {
          SeriesId: this.props.seriesId
        },
        {
          headers: {
            Authorization: 'Bearer ' + this.props.auth.getAccessToken()
          }
        }
      )
      .then(() => {})
  }

  _removeFollow = () => {
    console.log('unfollowing', this.props.seriesId)
    axios
      .delete('https://localhost:5001/api/userpref/' + this.props.seriesId, {
        headers: {
          Authorization: 'Bearer ' + this.props.auth.getAccessToken()
        }
      })
      .then(() => {})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.isChecked ? 'checked' : ''
    })
  }

  render() {
    return (
      <>
        <div className="is-divider" />
        <div className="seriesSwitch" onClick={this._clickCheck}>
          <h1 className="title is-5">{this.props.name}</h1>
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
