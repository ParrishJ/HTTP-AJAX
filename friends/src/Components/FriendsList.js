import React from "react";
import Friend from "./Friend";

function FriendsList(props) {
  return (
    <ul>
      {props.friends.map((friendInfo, index) => {
        return <Friend friendInfo={friendInfo} key={index} />;
      })}
    </ul>
  );
}

export default FriendsList;
