import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useHistory, useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 15,
};
// FlightCodesModal is a child of InputCity
export default function FlightCodesModal(props) {
  let history = useHistory();
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);
  // const {id} = useParams()
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <pre>
              {JSON.stringify(props.flightCodeData, null, 4)}
              </pre> */}
          {props.flightCodeData.map((airports, index) => {
            return (
              <div key={index}>
                <p>{airports.airport_name} </p>
                <Button
                  variant="contained"
                  onClick={() => {
                    history.push(`/flights/${airports.airport_code}`);
                    // props.setCode(airports.airport_code);
                  }}
                >
                  {airports.airport_code}
                </Button>
              </div>
            );
          })}
          {/* <Button variant="contained">test 2 </Button>
              <Button variant="contained">test 3</Button> */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        </Box>
      </Modal>
    </div>
  );

  //loop through the array of airport codes and display a button for each
  // useEffect(() => {
  //     //variable url
  // axios.get("http://localhost:3001/Toronto")
  // .then((res) => {
  //     console.log("test10", res)
  // })
  // },[])
  //     return <div>
  //         <p>Hello Toronto Data</p>
  //     </div>;
}
// To do:
// 1. how to transition to a modal after you get the databack from axios request
// 2. show a modal with a list of flight code from the json response (map through the array of objects)
// 3. user clicks on the option and does a link react router? use useParams
// 4. axios to hit data and display it
