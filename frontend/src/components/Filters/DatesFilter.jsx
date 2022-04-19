import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";

function DatesFilter(props) {


const sortedArray = [...new Set(props.flightData.map(item => {

  return item.flightData.departure_at.slice(0, 10)
}))]

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        props.setDate(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        props.setDate(newInputValue ? newInputValue : null);
      }}
      sx={{ width: 300 }}
      value={props.selectedDate}
      options={sortedArray.sort()}
      autoHighlight
      getOptionLabel={(option) =>
      option.slice(0, 10)}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {moment(option).format('LLL').slice(0, -8)}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a departure date"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
            value: params.inputProps.value && `${moment(params.inputProps.value).format('LLL').slice(0, -8)}`// disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default DatesFilter;