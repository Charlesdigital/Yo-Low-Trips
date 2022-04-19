import useApplicationDataFavourites from "../hooks/useApplicationDataFavourites";
import { airportNamesLookup } from "../helpers/airportNamesLookupTable";

import moment from "moment";
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Divider
} from "@mui/material";

//mui icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ThemeProvider } from "@mui/material/styles";


export default function Favourites(props) {
  const {
    setState,
    state,
    handleRemove,
    theme,
  } = useApplicationDataFavourites();

  return (
    <div className="SubHeading">
      <Typography className = "textHeading" marginTop="50px">
        Flight Favourites
      </Typography>

      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={6} marginTop="20px" alignItems="stretch">
            {state.favourites.map((fav, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                key={index}
                height="100%"
                alignItems="stretch"
              >
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}
                >
                  <Grid container spacing={2}>
                    <Grid item></Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          > <span className="pop">
                            Destination:{" "}
                            </span>
                            <Typography variant="h6">
                            {
                              ((fav.destination =
                                fav.destination.toUpperCase()),
                              airportNamesLookup[fav.destination]
                                ? `${airportNamesLookup[fav.destination]} - ${
                                    fav.destination
                                  }`
                                : fav.destination)
                            }
                            </Typography>

                            <Typography variant="body"> <span className="pop">Origin: </span></Typography>
                            <Typography variant="h6">
                            {
                              ((fav.origin = fav.origin.toUpperCase()),
                              airportNamesLookup[fav.origin]
                                ? `${airportNamesLookup[fav.origin]} - ${
                                    fav.origin
                                  }`
                                : fav.origin)
                            }
                            </Typography>
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Departure Date:{" "}
                            {moment(fav.departure_at).format("LLL")} • Return
                            Date: {moment(fav.return_at).format("LLL")}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Typography
                              variant="body2"
                              sx={{ color: "#FF0000" }}
                            >
                              Promo Expiration:{" "}
                              {moment(fav.expires_at).format("LLL")}
                            </Typography>
                          </Typography>
                        </Grid>

                        <Grid item>
                        <Divider />
                          <Typography variant="body2" align="left" component="div">
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => handleRemove(fav)}
                            >
                              <DeleteOutlineIcon></DeleteOutlineIcon>
                              Remove
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" component="div">

                        <span className="pop">
                        <LocalOfferIcon fontSize="small"></LocalOfferIcon>
                          ${fav.price}

                          </span>

                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
