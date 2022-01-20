import axios from "axios";
import React, { useState } from "react";


function requestAirportCode(city) {
  console.log("test3", city)
  axios.get(`/airports/${city}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default function InputCity(props) {

  const [city, setCity] = useState("")
  const [error, setError] = useState();


  function validate() {
    if(city === "") {
    setError("City name cannot be blank");
      return;
    }
    setError("");
    requestAirportCode(city);
  }



// console.log("test1", city)
  return (
    <main>
      <h1> Yo-Low-Trips </h1>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Enter a city"
          onChange={(event)=> {
            setCity(event.target.value);
          }}
        />
        <button onClick={() => validate(city)}>
            Enter
          </button>
      </form>
    </main>
  );
}

{/* create a post on submit and then display codes */}


//1. create a form and on submit call a function
//2. creating an axios.get to get display the aiport code
//3. using react router to display