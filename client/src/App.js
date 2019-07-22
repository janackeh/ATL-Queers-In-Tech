import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./components/events";
import SingleEvent from "./components/event.js";
import Navbar from "./components/navbar"
import "./App.css";

function App() {
  return (
    <div className="App">
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
