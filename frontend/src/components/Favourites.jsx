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

  const handleRemove = (fav) => {
    let fav_id = fav.favid
    // console.log("THIS IS THE FAVOURITE OBJ ID: ", fav.favid)
    
    // const copyFav = [...state] // Original state

    // const newState = copyFav.filter(favourite => favourite.favId !== fav_id)

    // console.log("THIS IS copyFav after filter: ", newState);

    // setState(newState);
    
    return axios.post(`http://localhost:3001/user/delete/${fav_id}`)
      .then(response => {
        // console.log("THIS REMOVE WORKS!!!!!!", response)
        let user = localStorage.getItem("YoLowUser");
        user = JSON.parse(user) // convert back to object from JSON.stringify
        const user_id = user.id;
      // console.log(">>>>>>>", user)
      
      // use another axios call to fetch the data again
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
      })
  }
  
  return (
    <div>
      <p>Hello</p>

      <ul>
        {state.favourites.map((fav) => (
          <li key={fav.favid}>
            Origin: {fav.origin},
            Destination: {fav.destination},
            Departure Date: {fav.departure_at},
            Return Date: {fav.return_at},
            Promo Price: {fav.price},
            Promo Expiration: {fav.expires_at}
            <button type="submit" onClick={() => handleRemove(fav)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );

}