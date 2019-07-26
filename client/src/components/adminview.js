import React, { Component} from 'react'
import Events from "./events"
import Users from "./users"

class AdminView extends Component {
    render () {
        return (
            <div>
                <h1>Admin View</h1>
                <Events />
                <Users />
                
                
            </div>

        )
    }
}

export default AdminView