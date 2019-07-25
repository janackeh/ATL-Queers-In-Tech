import React, { Component} from 'react'
import Events from "./events"
import Event from "./event"
import Users from "./users"
import User from "./user"

class AdminView extends Component {
    render () {
        return (
            <div>
                <h1>Admin View</h1>
                <Events />
                <Users />
                <h2>Events</h2>
                
            </div>

        )
    }
}

export default AdminView