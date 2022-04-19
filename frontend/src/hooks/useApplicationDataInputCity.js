import { useState } from "react";
import axios from "axios";
const useApplicationDataInputCity = () => {

    //1. Get all airport codes based on the city submitted
function requestAirportCode(city) {
    return axios.get(`/airports/${city}`)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  }

   //2. Pass as a prop to your custom modal
  const [city,setCity] = useState("");
  const [open,setOpen] = useState(false);
  const [flightCodeData, setflightCodeData] = useState([]);
   function validate(event, city) {
    event.preventDefault()
    requestAirportCode(city).then((response) => {
      if(response.data) {
        setflightCodeData(response.data);
        setOpen(true);
      }
    })
  }

  return { city, setCity, open, setOpen, flightCodeData, validate }

}

export default useApplicationDataInputCity;
