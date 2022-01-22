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
  return (
    <div>
      <Typography variant="h1"> Flight Deals for {id} </Typography>

      <Container >
        <Grid container spacing={4}>
          {state.flights.map((flight) => (

              <Grid item xs={12} sm={6} md={3}>
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
                    <Button size="small" color="primary">
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
