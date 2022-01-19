import React, { Component, useState, useEffect } from "react";
import axios from "axios";

export default function Flights(props) {
  const [state, setState] = useState({
    flights: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/flights")
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
            Origin: {flight.origin}, Price: {flight.price}, Destination:
            {flight.destination}, 
            Expires at: {flight.expires_at},
            Airline: {flight.airline},
            Departure At: {flight.departure_at},
            Return At: {flight.return_at}

          </li>
        ))}
      </ul>
    </div>
  );
}
