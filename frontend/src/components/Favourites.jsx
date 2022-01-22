import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function Favourites(props) {
  const [state, setState] = useState({
    favourites: [],
  });

  useEffect(() => { // useEffect tells react to run the request once
    let user = localStorage.getItem("YoLowUser");
    user = JSON.parse(user) // convert back to object from JSON.stringify
    const user_id = user.id;
    // console.log(">>>>>>>", user)
    axios
      .get(`http://localhost:3001/user/favourites/${user_id}`)
      .then((res) => {
        // console.log("axios req data", res);
        const favData = res.data;
        // console.log("++++++++++++++++++", favData)
        setState((prev) => {
        return { ...prev, favourites: favData }
        });
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
        {/* {console.log("THIS IS FAV STATE: ", state.favourites)} */}
        {state.favourites.map((fav) => (
          // <Fragment>
          // {console.log("FAVE", fav.favid)}
          <li key={fav.favid}>
            Origin: {fav.origin},
            Destination: {fav.destination},
            Departure Date: {fav.departure_at},
            Return Date: {fav.return_at},
            Promo Price: {fav.price},
            Promo Expiration: {fav.expires_at}
            <button type="submit">Remove</button>
          </li>
          // </Fragment>
        ))}
      </ul>
    </div>
  );

}