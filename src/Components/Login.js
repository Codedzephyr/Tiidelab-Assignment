import React,  { useContext } from "react";
import { LoginContext } from './../Contexts/LoginContext';
import '../App.css';

function Login() {
    const {setUsername,setShowProfile,setAge,setPlaceOfBirth} = useContext(LoginContext);
  return (
    <div className = "login-container">
      <label htmlFor="">Username</label>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
        <label htmlFor="">Age</label>
      <input
        type="text"
        placeholder="Age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
        <label htmlFor="">Place-Of-Birth</label>
      <input
        type="text"
        placeholder="Place-Of-Birth"
        onChange={(event) => {
          setPlaceOfBirth(event.target.value);
        }}
      />
      <input type="text" placeholder="Password..." />
      <button onClick = {()=>{setShowProfile(true)}}>LOGIN</button>
    </div>
  );
}

export default Login;
