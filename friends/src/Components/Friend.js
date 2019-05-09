import React from "react";

function Friend(props) {
  return (
    <div>
      <h1>{props.friendInfo.name}</h1>
      <h3>Age: {props.friendInfo.age}</h3>
      <h3>Email: {props.friendInfo.email}</h3>
    </div>
  );
}

export default Friend;
