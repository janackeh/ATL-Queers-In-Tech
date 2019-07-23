import React from "react";
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./components/events";
import SingleEvent from "./components/event.js";
import Users from "./components/users"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Events} />
          <Route path="/events/:eventId" component={SingleEvent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
