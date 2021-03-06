import React from "react";
import Friend from "./Friend";

function FriendsList(props) {
  return (
    <ul>
      {props.friends.map(friendInfo => {
        return (
          <Friend
            friendInfo={friendInfo}
            key={friendInfo.id}
            deleteFriend={props.deleteFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
