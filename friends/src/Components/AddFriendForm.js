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

  render() {
    return (
      <div className="AddFriendForm">
        <form onSubmit={props.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Add Name Here"
            onChange={this.changeHandler}
            value={props.newFriendInfo.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Add Age Here"
            onChange={this.changeHandler}
            value={props.newFriendInfo.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Add Email Here"
            onChange={this.changeHandler}
            value={props.newFriendInfo.email}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
