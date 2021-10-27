import React from "react";
import { LoginContext } from "./../Contexts/LoginContext";
import { useContext } from "react";

function Profile() {
  const { username, age, placeOfBirth } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {username}</h1>
      <h1>Age: {age}</h1>
      <h1>Place-of-Birth : {placeOfBirth}</h1>
    </div>
  );
}

export default Profile;
