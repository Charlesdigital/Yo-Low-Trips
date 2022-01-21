import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Favourites(props) {
  const [state, setState] = useState({
    favourites: [],
  });
  useEffect(() => { // useEffect tells react to run the request once
    let user = localStorage.getItem("YoLowUser");
    if (!user) {
      // redirect to login
    }
    user = JSON.parse(user) // convert back to object from JSON.stringify
    // console.log(">>>>>>>", user)
    axios
      .get(`http://localhost:3001/user/favourites/${user.id}`)
      .then((res) => {
        // console.log("axios req data", res);
        const favData = res.data;
        // console.log("++++++++++++++++++", favData)
        setState((prev) => ({ ...prev, favourites: favData }));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []); // dependency array which specify when the useeffect will fire
  // console.log("STATE", state.favourites);
  return (
    <div>
      <p>Hello</p>

      <ul>
        {state.favourites.map((flight) => (
          <li key={flight.id}>
            Origin: {flight.origin},
            Destination: {flight.destination},
            Departure Date: {flight.departure_at},
            Return Date: {flight.return_at},
            Promo Price: {flight.price},
            Promo Expiration: {flight.expires_at}
            <button type="submit">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}