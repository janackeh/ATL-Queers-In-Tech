import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleEvent extends Component {
  state = {
    event: {},
    isEditFormDisplayed: false,
    redirectHome: false
  };

  componentDidMount() {
    axios
      .get(`/api/events/${this.props.match.params.eventId}`)
      .then(res => {
        this.setState({ event: res.data });
      });
  }

  handleInputChange = event => {
    const copiedEvent = { ...this.state.event };
    copiedEvent[event.target.name] = event.target.value;

    this.setState({ event: copiedEvent });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(`/api/events/${this.state.event._id}`, this.state.event)
      .then(res => {
        this.setState({
          event: res.data,
          isEditFormDisplayed: false
        });
      });
  };

  handleToggleEditForm = () => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteEvent = () => {
    axios.delete(`/api/events/${this.state.event._id}`).then(() => {
      this.setState({ redirectToHome: true });
    });
  };

  redirectHome = () => {
      this.setState({
          redirect: true
      })
  }

  renderRedirect = () => {
      if (this.state.redirect) {
          return <Redirect to='/'/>
      }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="event-name">Event Name</label>
        <input
          type="text"
          id="event-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.event.name}
        />

        <label htmlFor="event-description">Event Description</label>
        <input
          type="text"
          id="event-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.event.description}
        />

        <input type="submit" value="Update Event" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Event</button>
        <button onClick={this.handleDeleteEvent}>Delete Event</button>
        {this.renderRedirect()}
        <button onClick={this.redirectHome}>Back to Home</button>
        <h2>{this.state.event.name}</h2>
        <p>{this.state.event.description}</p>
      </div>
    );
  }
}
