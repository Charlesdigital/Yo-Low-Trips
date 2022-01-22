/* Root/ Parent component */
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import InputCity from "./components/InputCity";
import Flights from "./components/Flights";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import FlightCodesModal from "./components/FlightCodesModal";

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
  const [user, setUser] = useState(
    null
  );

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

  //2. Fetch data from API and setState on inital render

  useEffect(() => {
    // move to backend (ie. Api route)
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
        //console.log("DESTINATION FLIGHT DATA", flightDestination["ATL"]);
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

 //  for each flight data item
 //  render a form that has each flight data.
 // the form will have a on submit handler
 // scheduler appointment form (ie. onsave) instead of onsave use handle submit
 // tiny app ex.

 // filters are button siblings to the filter components

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="content">
          <Switch>
            {/* all routes goes inside switch component */}
            <Route exact path="/"> {/* homepage */}
              <InputCity />

            </Route>
            <Route exact path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route exact path="/flights/:id">
              <Flights />
            </Route>
            <Route exact path="/favourites">
              <Favourites />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
