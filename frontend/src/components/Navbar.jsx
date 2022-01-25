import React from "react";
import { useHistory } from "react-router-dom";

/*** material-ui core components ***/
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';


export default function Navbar({user, setUser, code}) {
  const history = useHistory();

  console.log("THIS IS CODE :", code)

  const handleLogout = async evt => {
    setUser(null);
    localStorage.removeItem("YoLowUser")
    history.push("/login");
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
              <Link
                variant="button"
                color="text.primary"
                to="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                Search Origin
              </Link>
            }
            { user &&
              <Link
                variant="button"
                color="text.primary"
                to={`/flights/${code}`}
                sx={{ my: 1, mx: 1.5 }}
              >
                Fight Deals
              </Link>
            }
            { user &&
              <Link
                variant="button"
                color="text.primary"
                to="/favourites"
                sx={{ my: 1, mx: 1.5 }}
              >
                Favourites
              </Link>
            }
            { user &&
              <Link
                variant="button"
                color="text.primary"
                onClick={handleLogout}
                sx={{ my: 1, mx: 1.5 }}
              >
                Logout
              </Link>
            }
          </nav> 
        </Toolbar>
      </AppBar>
     </React.Fragment>
  )
}
