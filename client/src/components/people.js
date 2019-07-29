import React, { Component } from 'react';
import Users from "./users"

class People extends Component {
    render () {
        return (
            <div>
                <h1>People</h1>
                <Users />
            </div>

        )
    }
}

export default People