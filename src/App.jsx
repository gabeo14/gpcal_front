import React, { Component } from 'react'
import './App.scss'
import NavBar from './NavBar.jsx'
import TimeLine from './TimeLine.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TimeLine />
      </div>
    )
  }
}

export default App
