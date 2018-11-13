import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class TimeLine extends Component {
  state = {}
  render() {
    return (
      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">March 2018</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <p className="heading">March 3rd</p>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Formula 1</p>
                    <p className="subtitle is-6">Australian GP</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-image is-32x32">
            <img src="http://bulma.io/images/placeholders/32x32.png" />
          </div>
          <div className="timeline-content">
            <p className="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker is-icon">
            <i className="fa fa-flag" />
          </div>
          <div className="timeline-content">
            <p className="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div className="timeline-header">
          <span className="tag is-medium is-primary">End</span>
        </div>
      </div>
    )
  }
}

export default TimeLine
