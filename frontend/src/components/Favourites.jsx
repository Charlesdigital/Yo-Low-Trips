import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Divider
} from "@mui/material";

import "./Flights.css"
//mui icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
    axios
      .get(`http://localhost:3001/user/favourites/${user_id}`)
      .then((res) => {
        const favData = res.data;
        setState((prev) => {
          return { ...prev, favourites: favData };
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []); // dependency array which specify when the useeffect will fire

  const handleRemove = (fav) => {
    let fav_id = fav.favid;

    return axios
      .post(`http://localhost:3001/user/delete/${fav_id}`)
      .then((response) => {
        let user = localStorage.getItem("YoLowUser");
        user = JSON.parse(user); // convert back to object from JSON.stringify
        const user_id = user.id;

        // use another axios call to fetch the data again
        axios
          .get(`http://localhost:3001/user/favourites/${user_id}`)
          .then((res) => {
            const favData = res.data;
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
    <div className="SubHeading">
      <Typography className = "textHeading" marginTop="50px">
        Flight Favourites
      </Typography>

      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={6} marginTop="20px" alignItems="stretch">
            {state.favourites.map((fav, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                key={index}
                height="100%"
                alignItems="stretch"
              >
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}
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
                          > <span className="pop">
                            Destination:{" "}
                            </span>
                            <Typography variant="h6">
                            {
                              ((fav.destination =
                                fav.destination.toUpperCase()),
                              airportNamesLookup[fav.destination]
                                ? `${airportNamesLookup[fav.destination]} - ${
                                    fav.destination
                                  }`
                                : fav.destination)
                            }
                            </Typography>

                            <Typography variant="body"> <span className="pop">Origin: </span></Typography>
                            <Typography variant="h6">
                            {
                              ((fav.origin = fav.origin.toUpperCase()),
                              airportNamesLookup[fav.origin]
                                ? `${airportNamesLookup[fav.origin]} - ${
                                    fav.origin
                                  }`
                                : fav.origin)
                            }
                            </Typography>
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
                        <Divider />
                          <Typography variant="body2" align="left" component="div">
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => handleRemove(fav)}
                            >
                              <DeleteOutlineIcon></DeleteOutlineIcon>
                              Remove
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" component="div">

                        <span className="pop">
                        <LocalOfferIcon fontSize="small"></LocalOfferIcon>
                          ${fav.price}

                          </span>

                        </Typography>

                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
