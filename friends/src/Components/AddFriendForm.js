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

    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div className="AddFriendForm">
        <form onSubmit={this.submitHandler}>
          <input
            type="string"
            name="name"
            placeholder="Add Name Here"
            onChange={this.changeHandler}
            value={this.state.newFriend.name}
          />
          <input
            type="string"
            name="age"
            placeholder="Add Age Here"
            onChange={this.changeHandler}
            value={this.state.newFriend.age}
          />
          <input
            type="string"
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
