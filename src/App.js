// import logo from './logo.svg';
import "./App.css";
import Login from "./Components/Login";
import React, { useState } from "react";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          username,
          setUsername,
          age,
          setAge,
          placeOfBirth,
          setPlaceOfBirth,
          setShowProfile,
        }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
