import React, { Component } from 'react'
import { Navbar as BNavBar, Nav } from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return (
            <BNavBar sticky bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME[landing]</Nav.Link>
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                    <Nav.Link href="/adminview">ADMIN</Nav.Link>
                    <Nav.Link href="/home">EVENTS</Nav.Link>
                    <Nav.Link href="/people">PEOPLE</Nav.Link>
                    <Nav.Link href="/login">LOGIN</Nav.Link>
                </Nav>
            </BNavBar>
        )
    }
}

export default Navbar