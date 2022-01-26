import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import {
  Typography,
  Card,
  Box,
  CardActions,
  CardContent,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";

import { airportNamesLookup } from "../helpers/airportNamesLookupTable";

export default function Favourites(props) {
  const [state, setState] = useState({
    favourites: [],
  });

  useEffect(() => {
    // useEffect tells react to run the request once
    let user = localStorage.getItem("YoLowUser");
    user = JSON.parse(user); // convert back to object from JSON.stringify
    const user_id = user.id;
    // console.log(">>>>>>>", user)
    axios
      .get(`http://localhost:3001/user/favourites/${user_id}`)
      .then((res) => {
        // console.log("axios req data", res);
        const favData = res.data;
        // console.log("++++++++++++++++++", favData)
        setState((prev) => {
          return { ...prev, favourites: favData };
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []); // dependency array which specify when the useeffect will fire
  // console.log("STATE", state.favourites);

  const handleRemove = (fav) => {
    let fav_id = fav.favid;
    // console.log("THIS IS THE FAVOURITE OBJ ID: ", fav.favid)

    // const copyFav = [...state] // Original state

    // const newState = copyFav.filter(favourite => favourite.favId !== fav_id)

    // console.log("THIS IS copyFav after filter: ", newState);

    // setState(newState);

    return axios
      .post(`http://localhost:3001/user/delete/${fav_id}`)
      .then((response) => {
        // console.log("THIS REMOVE WORKS!!!!!!", response)
        let user = localStorage.getItem("YoLowUser");
        user = JSON.parse(user); // convert back to object from JSON.stringify
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
              return { ...prev, favourites: favData };
            });
          })
          .catch((err) => {
            console.log("Error", err);
          });
      });
  };

  return (
    <div>
      <Typography className = "center" variant="h1">Flight Favourites</Typography>



      <Container>
        <Grid container spacing={4} marginTop="100px" alignItems="stretch">
          {state.favourites.map((fav, index) => (
            // <li key={fav.favid}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              height="100%"
              alignItems="stretch"
            >
              <Card sx={{ height: "400px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Origin:
                    {
                      ((fav.origin = fav.origin.toUpperCase()),
                      airportNamesLookup[fav.origin]
                        ? `${airportNamesLookup[fav.origin]} - ${fav.origin}`
                        : fav.origin)
                    }
                    , Destination:{" "}
                    {
                      ((fav.destination = fav.destination.toUpperCase()),
                      airportNamesLookup[fav.destination]
                        ? `${airportNamesLookup[fav.destination]} - ${
                            fav.destination
                          }`
                        : fav.origin)
                    }
                    , Departure Date: {moment(fav.departure_at).format("LLL")},
                    Return Date: {moment(fav.return_at).format("LLL")}, Promo
                    Price: {fav.price}, Promo Expiration:{" "}
                    {moment(fav.expires_at).format("LLL")}
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => handleRemove(fav)}
                    >
                      Remove
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
