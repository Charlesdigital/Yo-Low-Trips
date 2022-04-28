import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useApplicationDataFlights = () => {

    let { id } = useParams();

    const [minMaxValue, setminMaxValue] = React.useState([0, 1200]);
    const [flights, setFlights] = useState([]);
    const [filterFlights, setFilterFlights] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    //1. Fetch the response for flights
    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/flights/${id}`)
          .then((res) => {
            const flightsData = res.data;
            setFlights(flightsData);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }, [id]);

      //2. Filter all filters together
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

      //3. Set favourite to true and post to store it in the database
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

       return { minMaxValue, setminMaxValue, flights, filterFlights, selectedDestination,  setSelectedDestination, selectedDate, setSelectedDate, handleAdd }

}

export default useApplicationDataFlights;
