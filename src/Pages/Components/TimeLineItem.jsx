import React, { Component } from 'react'
import moment from 'moment-timezone'
import momentjs from 'moment'

class TimeLineItem extends Component {
  render() {
    return (
      <div className="timeline-item">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <p className="heading">
            {moment
              .tz(this.props.eventTime, 'Etc/UTC')
              .clone()
              .tz(moment.tz.guess())
              .format('MMM Do YYYY')}
          </p>

          <div className="card">
            <div className="card-content">
              <div className="media">
                {/* <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div> */}
                <div className="media-content">
                  <p className="title is-4">{this.props.title}</p>
                  <p className="subtitle is-6">{this.props.seriesName}</p>
                </div>
              </div>

              <div className="content">
                {this.props.type}
                <br />
                <time
                  dateTime={moment
                    .tz(this.props.eventTime, 'Etc/UTC')
                    .clone()
                    .tz(moment.tz.guess())
                    .format('MMM Do YYYY, h:mm a')}
                >
                  {moment
                    .tz(this.props.eventTime, 'Etc/UTC')
                    .clone()
                    .tz(moment.tz.guess())
                    .format('MMM Do YYYY, h:mm a')}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeLineItem
