import { useState, useEffect} from "react";
import './App.css';
import axios from "axios";




function App() {

  useEffect(()=> {

    const options = {
      method: 'GET',
      url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/special-offers',
      headers: {
        'x-access-token': 'e62e076131586fa535bf5122617771fd',
        'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'x-rapidapi-key': 'b169ba8764msh3d4d2f25dac01f6p14399fjsn126a1054ff00'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
