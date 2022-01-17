import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
// import AllFlights from "components/allflights"
function App() {
  //1.Initial state
  const [state, setState] = useState({
    airline: "",
    departure_at: "",
    expires_at: "",
    flight_number: "",
    price: null,
    return_at: "",
    origin: "nyc", //
  });

  // 1. use state for a simple string (City) = controled comp start undefiend or null
  // 2. use react router to simulate multipage
  //
  // if null render form
  // once change use query
  //

  //Questions:
  // how to show only 20 results at a time? Result data limits results to 100 by default. Should we for loop?
  // render all return
  //  stores all 100 into state. make own logic that shows parts of state (limit)

  //where to set origin state? how to pass it up from searchbar component?

  //how to calculate duration using calander dates?

  //2. Fetch data from API and setState on inital render

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap",
      params: {
        currency: "usd",
        page: "1",
        origin: `${state.origin}`,
        destination: "-",
      },
      headers: {
        "x-access-token": "e62e076131586fa535bf5122617771fd",
        "x-rapidapi-host":
          "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
        "x-rapidapi-key": "b169ba8764msh3d4d2f25dac01f6p14399fjsn126a1054ff00",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const flightData = response.data;
        const flightDestination = flightData.data;
        console.log("DESTINATION FLIGHT DATA", flightDestination["ATL"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // const handleSubmit = () => {
  //   axios.post('/', {}

  //   )
  // };
  //pass in state

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
