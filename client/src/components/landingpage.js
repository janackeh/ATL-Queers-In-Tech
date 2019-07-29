import React, { Component } from 'react'
import { Jumbotron,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class LandingPage extends Component {
    render() {
       
        return (
            <Jumbotron>
    
  <h1>Queer ATL,
      you've found your tech tribe. 
  </h1>
  <p>
    We are a group of queer identified Atlantans 
    who gather weekly for fun social events 
    primarily centered around the intersections
    of science, technology, engineering, math and our unique identity.
    Welcome! 
  </p>
  <p>
    <Button variant="primary" link to="/joinform" active={true}>JOIN FOR FREE!</Button>
    <div>
    <Link to="/login"> Already a member? Login here</Link>
</div>
</p>

</Jumbotron>
        )
    }
}

export default LandingPage