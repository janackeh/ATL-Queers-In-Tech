import React, { Component } from 'react'

class Navbar extends Component {
  render() {
      return (
          <div className="navbar" key = {this.props.index}>
              <div>
          <a href="#description">ABOUT</a>
          </div>
          <div>
          <a href="#events">EVENTS</a>
          </div>
          <div>
          <h1>ATL QUEERS IN TECH</h1>
          </div>
          <div>
          <a href="#profile">PROFILE</a>
          </div>
          <div>
          <a href="#login">LOGIN</a>
          </div>

         
          </div>
      )
    }
}

export default Navbar