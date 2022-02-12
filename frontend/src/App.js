/* Root/ Parent component */
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import "./App.css";

// import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import InputCity from "./components/InputCity";
import Flights from "./components/Flights";
import Favourites from "./components/Favourites";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(
    null
  );


  const [code, setCode] = useState("");

  const flightCode = (flightId) => {
    setCode(flightId === "" ?  "" : flightId)
  }

  useEffect(()=> {
   const currentUser = localStorage.getItem("YoLowUser");
   if (currentUser) {
     setUser(JSON.parse(currentUser));
   }

  },[])

  return (
    <StyledEngineProvider injectFirst>
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} code={code}/>
        <div className="content">
          <Switch>
            {/* all routes goes inside switch component */}
            <Route exact path="/search">
              {/* homepage */}
              <InputCity
                code={code}
                setcode={setCode}
              />
            </Route>
            <Route exact path="/">
              <Login setUser={setUser} />
            </Route>
            <Route exact path={`/flights/:id`}>
              <Flights appFlightCode={flightCode} />
            </Route>
            <Route exact path="/favourites">
              {!user ? <Redirect to="/login" /> : <Favourites />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </StyledEngineProvider>
  );
}

export default App;
