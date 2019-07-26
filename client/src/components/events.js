import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Events extends Component {
  /* Step 3
   * Create a state for the component to store view data
   *
   */
  state = {
    events: [],
    isNewFormDisplayed: false,
    addNewEvent: [],
    newEvent: "",
  };

  /* Step 4
   * Use componentDidMount to retrieve any data to display
   *   Here you can make calls to your local express server
   *   or to an external API
   *   setState can be run here as well
   *   -REMINDER remember `setState` it is an async function
   */
  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents = () => {
    axios.get("/api/events/").then(res => {
      console.log(res.data);
      this.setState({ events: res.data });
    });
  };

  handleToggleNewForm = () => {
    this.setState(state => {
      return { isNewFormDisplayed: !state.isNewFormDisplayed };
    });
  };

  handleInputChange = event => {
    const copiedEvent = { ...this.state.newEvent };
    copiedEvent[event.target.name] = event.target.value;

    this.setState({ newEvent: copiedEvent });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post("/api/events/", this.state.newEvent).then(res => {
      this.setState({ isNewFormDisplayed: false });
      this.getAllEvents();
    });
  };

  /* Step 5
   *  The render function manages what is shown in the browser
   *  TODO: delete the jsx returned
   *   and replace it with your own custom jsx template
   *
   */
  render() {
    let eventsList = this.state.events.map(event => {
      return (
        <div>

          <Link key={event._id} to={`/events/${event._id}`}>
            {event.name}
          </Link>
        </div>
      );
    });

    return this.state.isNewFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-event-name">Event Name</label>
        <input
          type="text"
          id="new-event-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.newEvent.name}
        />

        <label htmlFor="new-event-description">Event Description</label>
        <input
          type="text"
          id="new-event-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.newEvent.description}
        />

        <input type="submit" value="Create Event" />
      </form>
    ) : (
        <div>
          <img src="https://i.imgur.com/7EVpbk2.png" alt="logo"></img>
          <h1> Events </h1>
          {eventsList}
          <div>
            <button onClick={this.handleToggleNewForm}>Create New Event</button>
          </div>
        </div>
      );
  }
}
