import React, { Component } from 'react'

class Navbar extends Component {
  render() {
      return (
          <div className="navbar" key = {this.props.index}>
          <a href="#description">ABOUT</a>
          <a href="#events">EVENTS</a>
          <h1>ATL QUEERS IN TECH</h1>
          <a href="#profile">PROFILE</a>
          <a href="#login">LOGIN</a>

         
          </div>
      )
    }
}

export default Navbar