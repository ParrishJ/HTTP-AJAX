import React from "react";
import logo from "./logo.svg";
import FriendsList from "./Components/FriendsList";
import AddFriendForm from "./Components/AddFriendForm";
import axios from "axios";
import { BroserRouter as Router, Route, NavLInk } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        /*  history?????????????????????????????? */
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <AddFriendForm {...props} addFriend={this.addFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
