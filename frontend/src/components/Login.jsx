import React, { useState } from "react";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";



export default function Login({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 // making request to the backend server to pull in data
  const login = function() {
    console.log ("LOGGING IN!!!")
    axios({
      method: "POST",
      url: '/users/login', // uses POXY 
      data: {
        email: email,
        password: password
      },
    }).then((response) => {  // success message
      const user = response.data.user;
      setUser(user);
      localStorage.setItem( "YoLowUser", JSON.stringify(user)); //set the user to use multiple screens/page on app
      console.log("Success!!!! response is:", response)
    }).catch(err => { 
      console.error(err.response.data);
    })
  };

  const handleLogin = async evt => {
    evt.preventDefault();
    login({ email, password });
    // setUser(user);
    history.push("/flights"); // redirects to flights screen after successful login
  }

  return (
    <div className="login-form">
      <h3 className="form-header">Login</h3>
      <br />
      <form onSubmit={handleLogin}>
        <label>
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter e-mail address here"
            onChange={evt => setEmail(evt.target.value)}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter password here"
            onChange={evt => setPassword(evt.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit User</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}