-- Parameters from Cheapest Tickets
INSERT INTO
flights(origin, destination, price, airline, flight_number, departure_at, return_at, expires_at)
VALUES
-- Toronto to Japan
    ('YYZ', 'TYO', 200, 'OZ', '111', '2022-01-31T08:20:00Z', '2022-02-12T10:00:00Z', '2022-01-28T13:30:00Z'),
-- Toronto to Paris
    ('YYZ', 'PAR', 175, 'AC', '222', '2022-01-30T00:20:00Z', '2022-02-07T13:45:00Z', '2022-01-29T16:00:00Z'),
-- Toronto to Sao Paulo
    ('YTZ','SAO', 100, 'UA', '333', '2022-02-03T17:41:00Z', '2022-02-10T14:14:00Z', '2022-01-28T13:30:00Z'),
-- Toronto to Cairo
    ('YYZ', 'CAI', 125, 'EK', '444', '2022-02-01T20:15:00Z', '2022-02-09T18:23:00Z', '2022-01-29T09:00:00Z'),
-- Toronto to Honolulu
    ('YYZ', 'HNL', 150, 'AC', '555', '2022-02-02T19:00:00Z', '2022-02-14T16:01:00Z', '2022-01-30T00:00:00Z'),
-- Toronto to Sweden
    ('YYZ', 'ARN', 75, 'TP', '666', '2022-02-01T17:30:00Z', '2022-02-08T13:48:00Z', '2022-01-27T22:30:00Z'),
-- Vancouver to London
    ('YVR', 'LON', 150, 'AC', '666', '2022-01-31T16:50:00Z', '2022-02-11T10:10:00Z', '2022-01-28T08:30:00Z'),
-- Vancouver to Las Vegas
    ('YVR', 'LAS', 75, 'AC', '777', '2022-01-29T11:30:00Z', '2022-02-05T18:11:00Z', '2022-01-28T02:00:00Z'),
-- Vancouver to Delhi
    ('YVR', 'DEL', 125, 'BA', '888', '2022-01-31T22:55:00Z', '2022-02-13T10:04:00Z', '2022-01-27T20:30:00Z');

INSERT INTO favourites(flight_id, user_id)
VALUES
-- Amanda Won's favourite flights
    (1, 1), -- Toronto to Japan
    (2, 1), -- Toronto to Paris
    (5, 1), -- Toronto to Honolulu
-- KC Trey's favourite flights
    (8, 3); -- Vancover to Las Vegas


INSERT INTO activities(favourite_id, name, start_at, end_at)
VALUES
-- Japan
    (1, 'Visit Tokyo Tower', '2022-02-02T11:00:00', '2022-02-02T13:00:00'),
    (1, 'Attend a Tea Ceremony', '2022-02-03T14:00:00', '2022-02-03T16:00:00'),
    (1, 'Try Ramen Noodles', '2022-02-05T18:00:00', '2022-02-05T19:00:00'),
    (1, 'Visit a Hot Spring', '2022-02-06T17:00:00', '2022-02-07T11:00:00'),
-- Honolulu
    (3, 'Go Snorkeling', '2022-02-03T10:00:00', '2022-02-03T11:00:00'),
    (3, 'Try Hula Dancing', '2022-02-03T:15:00:00', '2022-02-03T16:00:00'),
-- Las Vegas
    (4, 'Visit the Hover Dam', '2022-01-31T09:00:00', '2022-01-31T13:00:00'),
    (4, 'See a Cirque du Soleil show', '2022-01-31T22:00:00', '2022-02-01T00:0000');

INSERT INTO cities(name)
VALUES
-- Origin
    ('Vancouver'),
    ('Calgary'),
    ('Toronto'),
    ('Tokyo'),
    ('Montreal');

INSERT INTO airports(airport_code, city_id, airport_name)
VALUES
    ('YYZ', 3, 'Toronto Pearson Airport'),
    ('YTZ', 3, 'Billy Bishop Toronto City Airport'),
    ('YTO', 3, 'All Toronto Airports'),
    ('YVR', 1, 'Vancouver International Airport'),
    ('YYC', 2, 'Vancouver International Airport'),
    ('HND', 4, 'Haneda to Airports'),
    ('NRT', 4, 'Narita to Airports');
