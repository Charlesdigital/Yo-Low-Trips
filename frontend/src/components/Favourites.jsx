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

import { ThemeProvider, createTheme } from "@mui/material/styles";
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
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0052cc",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
  });

  return (
    <div>
      <Typography className="center" variant="h1">
        Flight Favourites
      </Typography>

      <ThemeProvider theme={theme}>
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
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
                >
                  <Grid container spacing={2}>
                    <Grid item></Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
                            Destination:{" "}
                            {
                              ((fav.destination =
                                fav.destination.toUpperCase()),
                              airportNamesLookup[fav.destination]
                                ? `${airportNamesLookup[fav.destination]} - ${
                                    fav.destination
                                  }`
                                : fav.destination)
                            }
                            <br></br> 
                            <Typography variant="">Origin: </Typography>
                            {
                              ((fav.origin = fav.origin.toUpperCase()),
                              airportNamesLookup[fav.origin]
                                ? `${airportNamesLookup[fav.origin]} - ${
                                    fav.origin
                                  }`
                                : fav.origin)
                            }
                            
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Departure Date:{" "}
                            {moment(fav.departure_at).format("LLL")} • Return
                            Date: {moment(fav.return_at).format("LLL")}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography
                              variant="body2"
                              sx={{ color: "#FF0000" }}
                            >
                              Promo Expiration:{" "}
                              {moment(fav.expires_at).format("LLL")}
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => handleRemove(fav)}
                            >
                              Remove
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div">
                          ${fav.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>

                {/* <Card sx={{ height: "400px" }}>
                <CardContent>
                  <Typography>
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
              </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
