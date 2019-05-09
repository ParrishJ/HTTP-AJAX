import React from "react";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteFriendTwo = e => {
    e.preventDefault();
    this.props.deleteFriend(this.props.friendInfo.id);
  };

  render() {
    return (
      <div>
        <h1>{this.props.friendInfo.name}</h1>
        <h3>Age: {this.props.friendInfo.age}</h3>
        <h3>Email: {this.props.friendInfo.email}</h3>
        <button onClick={this.deleteFriendTwo}>Delete</button>
      </div>
    );
  }
}

export default Friend;
