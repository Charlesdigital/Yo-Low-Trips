import React from "react";
import { Link, useHistory } from "react-router-dom";

/*** material-ui core components ***/
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Button } from "@mui/material";


export default function Navbar({user, setUser, code}) {
  const history = useHistory();

  console.log("THIS IS CODE :", code)

  const handleLogout = async evt => {
    setUser(null);
    localStorage.removeItem("YoLowUser")
    history.push("/");
  }

  return (
    <React.Fragment>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Yo-Low Trips
        </Typography>
          <nav>
            { user &&
              <Button
                variant="button"
                color="text.primary"
                component={Link}
                to="/search"
                sx={{ my: 1, mx: 1.5 }}
              >
                Search Origin
              </Button>
            }
            { user &&
              <Button
                variant="button"
                color="text.primary"
                component={Link}
                to={`/flights/${code}`}
                sx={{ my: 1, mx: 1.5 }}
              >
                Fight Deals
              </Button>
            }
            { user &&
              <Button
                variant="button"
                color="text.primary"
                component={Link}
                to="/favourites"
                sx={{ my: 1, mx: 1.5 }}
              >
                Favourites
              </Button>
            }
            { user &&
              <Button
                variant="button"
                color="text.primary"
                onClick={handleLogout}
                sx={{ my: 1, mx: 1.5 }}
              >
                Logout
              </Button>
            }
          </nav> 
        </Toolbar>
      </AppBar>
     </React.Fragment>
  )
}
