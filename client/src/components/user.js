import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleUser extends Component {
  state = {
    users: {},
    isEditFormDisplayed: false,
    redirectHome: false
  };

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.match.params.usersId}`)
      .then(res => {
        this.setState({ users: res.data });
        console.log(res)
      });
  }

  handleInputChange = event => {
    let copiedUsers = { ...this.state.users };
    copiedUsers[event.target.name] = event.target.value;

    this.setState({ users: copiedUsers });
  };

  handleSubmit = users => {
    users.preventDefault();

    axios
      .put(`/api/users/${this.state.users._id}`, this.state.users)
      .then(res => {
        this.setState({
          users: res.data,
          isEditFormDisplayed: false
        });
      });
  };

  handleToggleEditForm = () => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteUsers = () => {
    axios.delete(`/api/users/${this.state.users._id}`).then(() => {
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
        <label htmlFor="users-name">Public Display Name</label>
        <input
          type="text"
          id="users-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.users.name}
        />

        <label htmlFor="users-description"> About Me </label>
        <input
          type="text"
          id="users-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.users.description}
        />

        <input type="submit" value="Update User" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Users</button>
        <button onClick={this.handleDeleteUsers}>Delete Users</button>
        {this.renderRedirect()}
        <button onClick={this.redirectHome}>Back to Home</button>
        <h2>{this.state.users.name}</h2>
        <p>{this.state.users.description}</p>
      </div>
    );
  }
}
