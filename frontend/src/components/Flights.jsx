import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  Grid,
  Paper,
  Divider,
  Box
} from "@mui/material";

import LinearProgress from '@mui/material/LinearProgress';
//icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import PriceFilter from "./Filters/PriceFilter";
import DestinationFilter from "./Filters/DestinationFilter";
import DatesFilter from "./Filters/DatesFilter";
import {airportNamesLookup} from "../helpers/airportNamesLookupTable";
import "./Flights.css";


export default function Flights(props) {
  let { id } = useParams();

  const { appFlightCode } = props;
  appFlightCode(id);

  const priceReset = () => {
    setminMaxValue([0, 1200]);
  };
  const destinationReset = () => {
    setSelectedDestination(null);
  };
  const dateReset = () => {
    setSelectedDate(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));


  const [minMaxValue, setminMaxValue] = React.useState([0, 1200]);
  const [flights, setFlights] = useState([]);
  const [filterFlights, setFilterFlights] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/flights/${id}`)
      .then((res) => {
        console.log("axios req data", res.data);
        const flightsData = res.data;
        setFlights(flightsData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [id]);

  useEffect(() => {
    setFilterFlights(
      flights.filter((flight) => {

        return (
          flight.flightData.price > minMaxValue[0] &&
          flight.flightData.price < minMaxValue[1] &&
          (selectedDestination === null ||
            flight.destination === selectedDestination) &&
          (selectedDate === null ||
            flight.flightData.departure_at.slice(0, 10) ===
              selectedDate.slice(0, 10))
        );
      })
    );
  }, [minMaxValue, flights, selectedDestination, selectedDate]);


  const handleAdd = (flightObj, index) => {

   let user = JSON.parse(localStorage.getItem("YoLowUser"));
   const user_id = user.id;

   axios
   .post(`http://localhost:3001/api/flights/${id}/user/favourites/`, { flightObj, user_id })
   .then(response => {
     const flightsData = {favourited: true, destination: flightObj.destination, flightData: {...response.data}}

     const newFlights = [...flights]
     newFlights[index] = flightsData
     setFlights(newFlights);

   })
  }

  return (
    <>
      <article className="flightFilters">
        <Typography className="filterHeading">
          Flight Filters
        </Typography>
        <Grid
          display="flex"
          className="filters"
          justify-content="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Item className="filterBox">
              <Typography className="minMaxHeader" color="#626567">
                Price Range
              </Typography>
              <PriceFilter
                className="priceFilter"
                minMaxValue={minMaxValue}
                setminMaxValue={setminMaxValue}
              />
              <Button
                className="reset"
                size="small"
                onClick={() => priceReset()}
              >
                Reset Price
              </Button>
            </Item>
          </Grid>
          <Grid item xs={4} >
            <Item className="destinationFilter">
              <DestinationFilter
                selectedDestination={selectedDestination}
                setDestination={setSelectedDestination}
                flightData={filterFlights}
              />
              <Button
                size="small"
                color="primary"
                onClick={() => destinationReset()}
              >
                Reset Destination
              </Button>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="departureFilter">
              <DatesFilter selectedDate={selectedDate} setDate={setSelectedDate} flightData={filterFlights} />
              <Button size="small" color="primary" onClick={() => dateReset()}>
                Reset Date
              </Button>
            </Item>
          </Grid>
        </Grid>
      </article>

      <div>
      <Typography className = "textHeading" marginTop="50px">
        Flight Deals for {id.toUpperCase()}
      </Typography>

      <Container>

        {(filterFlights.length > 0) ?
          `${filterFlights.length} flights found` :
          ((flights.length > 0) ?
            `${flights.length} flights found` :
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )
        }
        <Grid container spacing={4} alignItems="stretch" >
          {filterFlights.map((flight, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index} height="100%" alignItems="stretch">
                <Card  sx={{height:"400px"}}>
                  <CardContent className="cards">
                    <Typography gutterBottom variant="h5" sx={{ minHeight: '90px' }}>
                      <span className="pop">{airportNamesLookup[flight.destination] ? `${airportNamesLookup[flight.destination]} - ${flight.destination}` : flight.destination}</span>
                      <Divider />
                    </Typography>

                    <Typography >
                      <span className="titles">Airline:</span> {flight.flightData.airline} <br></br>
                      <span className="titles">Flight Number:</span> {flight.flightData.flight_number} <br></br>
                      <span className="titles">Departure At:</span> {moment(flight.flightData.departure_at).format('LLL')} <br></br>
                      <span className="titles">Return At:</span> {moment(flight.flightData.return_at).format('LLL')} <br></br>
                      <span className="titles expire">Expires At:</span> {moment(flight.flightData.expires_at).format('LLL')} <br></br>
                    </Typography>

                    <Typography >
                    <span className="titles">Price</span> : <span className="price">${flight.flightData.price} </span> <br></br>
                    </Typography>
                  </CardContent>

                  <CardContent className="cards">
                    {flight.favourited === false ? (
                      <Button
                        className="fav-button"
                        size="small"
                        color="primary"
                        onClick={() => handleAdd(flight, index)}
                      >
                        <StarBorderIcon></StarBorderIcon>
                        Favourite
                      </Button>
                    ) : (
                      <Button className="fav-button" size="small" color="warning">
                        <StarIcon></StarIcon>
                        Favourited
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      </div>
    </>
  );
}
