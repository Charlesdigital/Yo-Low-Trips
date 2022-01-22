import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  Box,
  CardActions,
  CardContent,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { useParams } from 'react-router-dom';

export default function Flights(props) {
  let {id} = useParams()
  const [state, setState] = useState({
    flights: [],
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/flights/${id}`)
      .then((res) => {
        console.log("axios req data", res.data);
        const flightsData = res.data;
        setState((prev) => ({ ...prev, flights: flightsData }));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  console.log("STATE", state.flights);

  const handleAdd = (flightObj) => {
  //  console.log("THIS IS FLIGHT OBJECT+++++", flightObj)
  //  const { destination } = flightObj; // destructure so it's easy to access
  //  const { airline, departure_at, expires_at, flight_number, price, return_at } = flightObj.flightData
  //  const abc = new Date(departure_at).getTime(); 
  // let flight_id = `${airline}-${abc}-${flight_number}` // set this as id for local database
  // console.log(typeof flight_id)
   let user = JSON.parse(localStorage.getItem("YoLowUser"));
   const user_id = user.id;
  //  console.log ("USER----------", user_id)
   axios
   .post(`http://localhost:3001/api/flights/${id}/user/favourites/`, { flightObj, user_id })
   .then(response => {
    //  console.log("THIS IS RES+++++++", response)
   })
  }

  return (
    <div>
      <Typography variant="h1"> Hello </Typography>

      <Container >
        <Grid container spacing={4}>
          {state.flights.map((flight, index) => (
          
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {flight.destination}
                    </Typography>
                    <Typography>
                      Price: {flight.flightData.price}, Destination:
                      {flight.flightData.destination}, Expires at:{" "}
                      {flight.flightData.expires_at}, Airline:{" "}
                      {flight.flightData.airline}, Departure At:{" "}
                      {flight.flightData.departure_at}, Return At:{" "}
                      {flight.flightData.return_at}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Button size="small" color="primary" onClick={() => handleAdd(flight)}>
                      Favourite
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
        
          ))}
        </Grid>
      </Container>
    </div>
  );
}
