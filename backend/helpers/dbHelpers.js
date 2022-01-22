module.exports = (db) => {
    // Get a single user from database given their id
    const getUsers = (id) => {
        const query = {
            text: `SELECT * FROM users WHERE id = $1`,
        };

        return db
            .query(query, [id])
            .then((result) => result.rows)
            .catch((err) => err);
    };

    // Get a single user from database given their email
    const getUserByEmail = (email) => {
        const query = {
            text: `SELECT * FROM users WHERE email = $1` ,
            values: [email]
        };

        return db
        .query(query, [email])
        .then((result) => result.rows[0])
        .catch((err) => err);
    };
  
    // Add user to database
    const addUser = (firstName, lastName, email, password) => {
        const query = {
            text: `
                INSERT INTO users (first_name, last_name, email, password)
                VALUES ($1, $2, $3, $4) RETURNING *;` ,
            values: [firstName, lastName, email, password]
        };

        return db
        .query(query, [firstName, lastName, email, password])
        .then((result) => result.rows[0]) // return first obj
        .catch((err) => err);
    };

    // Get all favourites from a single user given their id
    const getAllFavouritesForUser = (userId) => {
        const query = {
            text:`
                SELECT * FROM favourites
                JOIN users ON users.id = favourites.user_id
                WHERE favourites.user_id = $1`,
            Value: [userId]
        };

        return db
            .query(query, [userId])
            .then(result => result.rows) // returns the whole obj
            .catch(err => err);
    };

    // Add a single flight to favourites database for a user given their id
    const addToFavourite = (id, userId, flightObj) => {
        const { destination } = flightObj; // destructure so it's easy to access
        const { airline, departure_at, expires_at, flight_number, price, return_at } = flightObj.flightData;

        const query = {
            text:`
                INSERT INTO favourites (user_id, origin, destination, price, airline, flight_number, departure_at, return_at, expires_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *;`,
            Value: [userId, id, destination, price, airline, flight_number, departure_at, return_at, expires_at]
        };

        return db
            .query(query, [userId, id, destination, price, airline, flight_number, departure_at, return_at, expires_at])
            .then(result => result.rows[0])
            .catch(err => err);
    };

    // remove a single flight from favourites database for a user
    const removeFavourite = (favId) => {
        const query = {
            text: `
                DELETE FROM favourites
                WHERE favourites.id = $1`,
            Value: [favId]
        };

        return db
            .query(query, [favId])
            .then(result => result.rows)
            .catch(err => err);
    };

    const getCityForOrigin = (id) => {
        const query = {
          text: `SELECT name
                FROM cities
                WHERE id = $1`,
        };

        return db
          .query(query, [id])
          .then((result) => result.rows)
          .catch((err) => err);
    };
    
    const getFlights = () => {
        const query = {
            text: `SELECT *
                FROM flights`,
        };

        return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    };

    //Get all the airports code related to a city a user Inputs
    const getAirportCodes = (name) => {
        const query = {
        text: `
            SELECT name, airport_code, airport_name
            FROM cities
            JOIN airports ON cities.id = city_id
            WHERE name = '${name}'`,
        };
        console.log("test8", query)
        return db.query(query)
            .then(result => {
                console.log("test9", result)

            console.log("test6", result.rows)
            return result.rows
            })
            .catch(err => err);
    };
    
    return {
        getUsers,
        getUserByEmail,
        addUser,
        getAllFavouritesForUser,
        addToFavourite,
        removeFavourite,
        getCityForOrigin,
        getFlights,
        getAirportCodes
    };
};
    
    
