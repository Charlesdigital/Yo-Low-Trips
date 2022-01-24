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
import PriceFilter from "./PriceFilter"

export default function Flights(props) {

  let {id} = useParams()

  const {appFlightCode} = props;
  appFlightCode(id)

  // console.log("THIS IS USE PARAMS: ", useParams())
  // console.log("THIS SHOULD BE FLIGHTCODE ID: ", id)
  
  const [minMaxValue, setminMaxValue] = React.useState([200, 500]);

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
  }, [id]);
  console.log("STATE", state.flights);

  const handleAdd = (flightObj, index) => {
   console.log("THIS IS FLIGHT OBJECT+++++", flightObj)
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
     const flightsData = {favourited: true, destination: flightObj.destination, flightData: {...response.data}}
     console.log("THIS IS RESDATA+++++++", flightsData)

     const newFlights = [...state.flights]
     newFlights[index] = flightsData
     console.log("THIS IS RES+++++++", response)
     setState(() => ({ flights: newFlights }));

   })
  }
  console.log("test 25", minMaxValue)

  return (
    <div>
      <PriceFilter
      minMaxValue={minMaxValue}
      setminMaxValue={setminMaxValue}
      />
      <Typography variant="h1"> Flight Deals for {id} </Typography>

      <Container >
        <Grid container spacing={4}>

          {state.flights.map((flight, index) => {
            if (flight.flightData.price > minMaxValue[0] && flight.flightData.price < minMaxValue[1]) {
              return (<Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {flight.destination}
                    </Typography>
                    <Typography>
                      Price: {flight.flightData.price},
                      {/* Destination:{flight.destination}, */}
                      Expires at:{" "}
                      {flight.flightData.expires_at}, Airline:{" "}
                      {flight.flightData.airline}, Departure At:{" "}
                      {flight.flightData.departure_at}, Return At:{" "}
                      {flight.flightData.return_at}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    {flight.favourited === false ? <Button size="small" color="primary" onClick={() => handleAdd(flight, index)}>
                      Favourite
                    </Button>: <Button size="small" color="primary" >
                      Favourited
                    </Button>}
                  </CardContent>
                </Card>
              </Grid>)
            }


})}
        </Grid>
      </Container>
    </div>
  );
}


// onClick={() => handleAdd(flight)}