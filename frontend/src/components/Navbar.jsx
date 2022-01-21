import React from "react";
import { Link, useHistory } from "react-router-dom";

/*** material-ui core components ***/
import Button from '@mui/material/Button';

export default function Navbar({user, setUser}) {
  const history = useHistory();

  const handleLogout = async evt => {
    setUser(null);
    localStorage.removeItem("YoLowUser")
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/">Yo-Low Trips</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Button className="nav-link" aria-current="page" component={Link} to="/" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              Home
          </Button>
          <Button className="nav-link" aria-current="page" component={Link} to="/flights" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              Flight Deals
          </Button>
          <Button className="nav-link" aria-current="page" component={Link} to="/favourites" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              Favourites
          </Button>
          {
            !user ?
              <div className="d-flex">
                <Button className="nav-link" aria-current="page" component={Link} to="/login" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                    Login
                </Button>
              </div> :
                <Button onClick={handleLogout} className="nav-item ms-2" variant="outlined" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                    Logout
                </Button>
          }
        </div>
      </div>
    </nav>
  )

}
