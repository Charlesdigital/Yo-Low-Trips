import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  console.log("rangeslider", props)
const {minMaxValue, setminMaxValue} = props

//   console.log("test 25", value)
  const handleChange = (event, newValue) => {
    setminMaxValue(newValue);
  };

  return (
    <Box >
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={minMaxValue}
        onChange={handleChange}
        min={0}
        max={2000}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}