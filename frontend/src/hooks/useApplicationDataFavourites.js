import { useState, useEffect} from "react";
import axios from "axios";
import { createTheme } from "@mui/material/styles";

const useApplicationDataFavourites = () => {

    // 1. Initial state
    const [state, setState] = useState({
        favourites: [],
      });

    // 2. Fetch data from favourites route
      useEffect(() => {
        // useEffect tells react to run the request once
        let user = localStorage.getItem("YoLowUser");
        user = JSON.parse(user); // convert back to object from JSON.stringify
        const user_id = user.id;
        axios
          .get(`http://localhost:3001/user/favourites/${user_id}`)
          .then((res) => {
            const favData = res.data;
            setState((prev) => {
              return { ...prev, favourites: favData };
            });
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }, []); // dependency array which specify when the useeffect will fire

    // 3. Remove favourite
    const handleRemove = (fav) => {
        let fav_id = fav.favid;

        return axios
          .post(`http://localhost:3001/user/delete/${fav_id}`)
          .then((response) => {
            let user = localStorage.getItem("YoLowUser");
            user = JSON.parse(user); // convert back to object from JSON.stringify
            const user_id = user.id;

            // use another axios call to fetch the data again
            axios
              .get(`http://localhost:3001/user/favourites/${user_id}`)
              .then((res) => {
                const favData = res.data;
                setState((prev) => {
                  return { ...prev, favourites: favData };
                });
              })
              .catch((err) => {
                console.log("Error", err);
              });
          });
      };

    // 4. Theme from material UI
      const theme = createTheme({
        palette: {
          primary: {
            main: "#0052cc",
          },
          secondary: {
            main: "#edf2ff",
          },
        },
        spacing: 4,
        shape: {
          borderRadius: 4,
        },
      });

  return { state, handleRemove, theme }

}

export default useApplicationDataFavourites;


