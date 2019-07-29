import React from "react";
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminView from "./components/adminview";
import Events from "./components/events";
import SingleEvent from "./components/event.js";
import Users from "./components/users";
import SingleUser from "./components/user";
import LandingPage from "./components/landingpage";
import Login from "./components/login"
import JoinForm from "./components/joinform"
import Home from "./components/home"
import About from "./components/about"
import People from "./components/HomeUsers"
import 'typeface-roboto';


import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/events/:eventId" component={SingleEvent} />
          <Route path="/events" component={Events} />
          <Route path="/users/:usersId" component={SingleUser} />
          <Route path="/user" component={Users} />
          <Route path="/adminview" component={AdminView} />
          <Route path="/login" component={Login}/>
          <Route path="/joinform" component={JoinForm}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/HomeUsers" component={People} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
