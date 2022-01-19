import React from "react";
import axios from "axios";

export default function Login(props) {
 // making request to the backend server to pull in data
  // useEffect(() => { // useEffect tells react to run the request once
  const login = function() {
    console.log ("LOGGING IN!!!")
    axios({
      method: "POST",
      url: '/users/login', // uses POXY 
      data: {
        email: 'personone@email.com',
        password: 'test'
      },
    }).then(() => { console.log("Success!!!!")});
  };

  return (
    <div>
      <p>Hello User</p>
      <button onClick= {() => login()}>
       Submit User
     </button>
    </div>
  );
}