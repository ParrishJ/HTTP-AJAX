import React from "react";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
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
    this.props.addFriend(this.state.newFriend);
  };

  render() {
    return (
      <div className="AddFriendForm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Add Name Here"
            onChange={this.changeHandler}
            value={this.state.newFriend.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Add Age Here"
            onChange={this.changeHandler}
            value={this.state.newFriend.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Add Email Here"
            onChange={this.changeHandler}
            value={this.state.newFriend.email}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
