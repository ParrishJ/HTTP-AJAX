import React from "react";

function AddFriendForm(props) {
  return (
    <div className="AddFriendForm">
      <form onSubmit={props.submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Add Name Here"
          onChange={props.changeHandler}
          value={props.newFriendInfo.name}
        />
        <input
          type="text"
          name="age"
          placeholder="Add Age Here"
          onChange={props.changeHandler}
          value={props.newFriendInfo.age}
        />
        <input
          type="text"
          name="email"
          placeholder="Add Email Here"
          onChange={props.changeHandler}
          value={props.newFriendInfo.email}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriendForm;
