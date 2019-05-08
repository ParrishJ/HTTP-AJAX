import React from "react";
import logo from "./logo.svg";
import FriendsList from "./Components/FriendsList";
import AddFriendForm from "./Components/AddFriendForm";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: "",
        id: ""
      }
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

  changeHandler = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({
      friends: [
        ...this.state.friends,
        {
          name: this.state.newFriend.name,
          age: this.state.newFriend.age,
          email: this.state.newFriend.email
        }
      ],
      newFriend: { name: "", age: "", email: "" }
    });
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <AddFriendForm
          newFriendInfo={this.state.newFriend}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
}

export default App;
