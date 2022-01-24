import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DatesFilter(props) {
  // console.log("props.flightData", props.flightData.flights)

  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        // console.log("NEWVALUE", newValue.flightData.departure_at)
        props.setDate(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        // console.log("NEWINPUTVALUE", newInputValue)
        props.setDate(newInputValue ? newInputValue : null);
      }}
      sx={{ width: 300 }}
      value={props.selectedDate}
      options={props.flightData.map(flight => flight.flightData.departure_at)}
      autoHighlight
      getOptionLabel={(option) => 
      option}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option}
        </Box>
      )}
      renderInput={(params) => (
        // console.log("params", params),
        <TextField
          {...params}
          label="Choose a departure date"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
