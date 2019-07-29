import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class HomeUsers extends Component {
  
  state = {
    users: [],
    isNewFormDisplayed: false,
    addNewUser: [],
    newUser: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get("/api/users/").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };

  handleToggleNewForm = () => {
    this.setState(state => {
      return { isNewFormDisplayed: !state.isNewFormDisplayed };
    });
  };

  handleInputChange = users => {
    const copiedUsers = { ...this.state.newUser };
    copiedUsers[users.target.name] = users.target.value;

    this.setState({ newUser: copiedUsers });
  };

  handleSubmit = users => {
    users.preventDefault();

    axios.post("/api/users/", this.state.newUser).then(res => {
      this.setState({ isNewFormDisplayed: false });
      this.getAllUsers();
    });
  };

 
  render() {
    // console.log(this.state.users)
    let usersList = this.state.users.map(users => {
      return (
        <div>
          <Link key={users._id} to={`/users/${users._id}`}>
            {users.name}
          </Link>
        </div>
      );
    });

    return this.state.isNewFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-users-name">Public Display Name</label>
        <input
          type="text"
          id="new-users-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.newUser.name}
        />

        <label htmlFor="new-users-description">About Me</label>
        <input
          type="text"
          id="new-users-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.newUser.description}
        />

        <input type="submit" value="Create Profile" />
      </form>
    ) : (
        <div>
          <img src="https://i.imgur.com/7EVpbk2.png" alt="logo"></img>
          <h1> People </h1>
          {usersList}
          <div>
            <button onClick={this.handleToggleNewForm}>Welcome New Member!</button>
          </div>
        </div>
      );
  }
}