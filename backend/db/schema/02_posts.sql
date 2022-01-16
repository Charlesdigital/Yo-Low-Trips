DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS activities CASCADE;

-- Parameters from FLIGHTS SPECIAL OFFERS
CREATE TABLE flights(
    id SERIAL PRIMARY KEY NOT NULL,
    origin VARCHAR(3) NOT NULL,
    origin_name VARCHAR(250) NOT NULL,
    origin_airport VARCHAR(3) NOT NULL,
    destination VARCHAR(3) NOT NULL,
    destination_name VARCHAR(250) NOT NULL,
    destination_airport VARCHAR(3) NOT NULL,
    price INTEGER NOT NULL,
    airline VARCHAR(2) NOT NULL,
    flight_number VARCHAR(4) NOT NULL,
    departure_at DATETIME,
    return_at DATETIME,
    transfers INTEGER,
    return_transfers INTEGER,
    duration INTEGER NOT NULL,
    link TEXT
);

CREATE TABLE favourites (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    flight_id INTEGER REFERENCES flights(id) ON DELETE CASCADE
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY NOT NULL,
    favourite_id INTEGER REFERENCES favourites(id) ON DELETE CASCADE,
    name VARCHAR(250),
    start_at DATETIME,
    end_at DATETIME
);