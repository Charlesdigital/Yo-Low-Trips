import useApplicationDataInputCity from "../hooks/useApplicationDataInputCity";

/*** Files ***/
import "../styles/InputCity.css";
import FlightCodesModal from "./FlightCodesModal";

/*** Material Ui ***/
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function InputCity(props) {

  const {
    city, setCity, open, setOpen, flightCodeData, validate
  } = useApplicationDataInputCity();

  return (
    <>
      <div className="inputCityImg">
        <div className="tagline">
          <h1 className="display-4">Experience the World</h1>
          <p>Lets start with where you want to fly out from.</p>
          <form autoComplete="off" onSubmit={(event) => validate(event,city)}>
            <Input
              className="inputField"
              placeholder="Enter a City"
              onChange={(event)=> {
                setCity(event.target.value);
              }}
              sx={{ border: 1, borderRadius: 1, width: 250, paddingLeft: 1 }}
            />
            <Button
              className="searchButton"
              variant="button"
              onClick={(event) => validate(event,city)}
              sx={{ my: 1, mx: 1.5 }}
            >
              Search
            </Button>
          </form>
          <FlightCodesModal
          open={open}
          setOpen={setOpen}
          flightCodeData={flightCodeData}
          code = {props.code}
          setCode = {props.setCode}
          />
        </div>
      </div>
    </>
  );
}

export default InputCity;