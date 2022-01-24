import axios from "axios";
import React, { useState } from "react";
import FlightCodesModal from "./FlightCodesModal";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


const border = {
  border: '2px solid #000',
};

const button = {
  bgcolor: 'text.secondary'
}

function requestAirportCode(city) {
  console.log("test3", city)
  return axios.get(`/airports/${city}`)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  });
}

export default function InputCity(props) {

  const [city, setCity] = useState("");
  const [error, setError] = useState();
  const [open,setOpen] = useState(false);
  const [flightCodeData, setflightCodeData] = useState([]);

  console.log("test 15", flightCodeData)
   //pass as a prop to your custom modal
  function validate() {
    if(city === "") {
    setError("City name cannot be blank");
      return;
    }
    setError("");
    requestAirportCode(city).then((response) => {
      if(response.data) {
        setflightCodeData(response.data);
        setOpen(true);
        console.log("test13", flightCodeData)
        console.log("test14", response.data)
      }
      console.log("test12", response.data)
    })
  }
//set modal to open, pass it true);

// {console.log("test12???", setflightCodeData)}

// need to change main
  return (
    <main>
      <h1> Yo-Low-Trips </h1>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <Input sx={border}
          type="text"
          placeholder="Enter a city"
          onChange={(event)=> {
            setCity(event.target.value);
          }}
        />
        <Button sx={border} onClick={() => validate(city)}>
            Search
          </Button>
      </form>
      <FlightCodesModal
      open={open}
      setOpen={setOpen}
      flightCodeData={flightCodeData}
      code = {props.code}
      setCode = {props.setCode}
      />
    </main>
  );
}

{/* create a post on submit and then display codes */}


//1. create a form and on submit call a function
//2. creating an axios.get to get display the aiport code
//3. using react router to display