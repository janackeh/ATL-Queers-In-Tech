import React from "react";
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminView from "./components/adminview";
import Events from "./components/events";
import SingleEvent from "./components/event.js";
import Users from "./components/users";
import SingleUser from "./components/user";
import 'typeface-roboto';


import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={AdminView} />
          <Route path="/events/:eventId" component={SingleEvent} />
          <Route path="/events" component={Events} />
          <Route path="/users/:usersId" component={SingleUser} />
          <Route path="/user" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
