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
        props.setDate(newValue.flightData.departure_at);
      }}
      onInputChange={(event, newInputValue) => {
        // console.log("NEWINPUTVALUE", newInputValue)
        props.setDate(newInputValue ? newInputValue : null);
      }}
      sx={{ width: 300 }}
      options={props.flightData}
      autoHighlight
      getOptionLabel={(option) => 
      option.flightData.departure_at}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.flightData.departure_at}
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
