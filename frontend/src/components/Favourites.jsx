import React, { Component, useState, useEffect } from "react";
import axios from "axios";

export default function Favourites(props) {
  const [state, setState] = useState({
    flights: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/favourites")
      .then((res) => {
        console.log("axios req data", res);
        const flightsData = res.data;
        setState((prev) => ({ ...prev, flights: flightsData }));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  console.log("STATE", state.flights);
  return (
    <div>
      <p>Hello</p>

      <ul>
        {state.flights.map((flight) => (
          <li key={flight.id}>
            Destination Name: {flight.destination},
            Flight Id: {flight.id}

          </li>
        ))}
      </ul>
    </div>
  );
}