import React, { Component } from 'react'
import { Navbar as BNavBar, Nav } from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return (
            <BNavBar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#admin">ADMIN</Nav.Link>
                    <Nav.Link href="#events">EVENTS</Nav.Link>
                    <Nav.Link href="#profile">PROFILE</Nav.Link>
                    <Nav.Link href="#login">LOGIN</Nav.Link>
                </Nav>
            </BNavBar>
        )
    }
}

export default Navbar