-- Parameters from FLIGHTS SPECIAL OFFERS
INSERT INTO
flights(id, origin, origin_name, destination, destination_name, origin_airport, destination_airport, price, airline, flight_number, departure_at, return_at, transfers, return_transfers, duration, link)
VALUES
-- Toronto to Japan
    (1, 'YTO', 'Toronto', 'TYO', 'Tokyo', 'YYZ', 'NRT', 200, 'OZ', '111', '2022-01-28T08:20:00-05:00', '2022-02-02T10:00:00-05:00', 0, 0, 780, 'https://en.wikipedia.org/wiki/Japan'),
-- Toronto to Paris
    (2, 'YTO', 'Toronto', 'PAR', 'Paris', 'YYZ', 'CDG', 175, 'AC', '222', '2022-01-28T00:20:00-05:00', '2022-01-31T13:45:00-05:00', 1, 1, 480, 'https://en.wikipedia.org/wiki/Paris'),
-- Toronto to Sao Paulo
    (3, 'YTO', 'Toronto', 'SAO', 'Sao Paulo', 'YYZ', 'GRU', 100, 'UA', '333', '2022-01-29T17:41:00-05:00', '2022-02-05T14:14:00-05:00', 2, 2, 1200, 'https://en.wikipedia.org/wiki/S%C3%A3o_Paulo'),
-- Toronto to Cairo
    (4, 'YTO', 'Toronto', 'CAI', 'Cairo International Airport', 'YYZ', 'CAI', 125, 'EK', '444', '2022-01-30T20:15:00-05:00', '2022-02-09T18:23:00-05:00', 1, 1, 930, 'https://en.wikipedia.org/wiki/Cairo'),
-- Toronto to Honolulu
    (5, 'YTO', 'Toronto', 'HNL', 'Honolulu', 'YYZ', 'HNL', 200, 'AC', '555', '2022-01-29T19:00:00-05:00', '2022-02-07T16:01:00-05:00', 1, 1, 780, 'https://en.wikipedia.org/wiki/Honolulu')
-- Vancouver to London
    (6, 'YVR', 'Vancouver', 'LON', 'London', 'YVR', 'LHR', 150, 'AC', '666', '2022-01-29T16:50:00-05:00', '2022-02-03T10:10:00-05:00', 0, 0, 540, 'https://en.wikipedia.org/wiki/London'),
-- Vancouver to Las Vegas
    (7, 'YVR', 'Vancouver', 'LAS', 'Las Vegas', 'YVR', 'LAS', 75, 'AC', '777', '2022-01-28T11:30:00-05:00', '2022-02-02T18:11:00-05:00', 0, 0, 163, 'https://en.wikipedia.org/wiki/Las_Vegas'),
-- Vancouver to Delhi (NEED DURATION)
    (8, 'YVR', 'Vancouver', 'DEL', 'Delhi', 'YVR', 'DEL', 125, 'BA', '888', '2022-01-31T22:55:00-05:00', '2022-02-13T10:04:00-05:00', 1, 1, 1800, 'https://en.wikipedia.org/wiki/Delhi');

INSERT INTO favourites(id, flight_id, user_id)
VALUES
-- Amanda Won's favourite flights
    (1, 1, 1), -- Toronto to Japan
    (2, 2, 1), -- Toronto to Paris
    (3, 5, 1), -- Toronto to Honolulu
-- KC Trey's favourite flights
    (4, 7, 3); -- Vancover to Las Vegas


INSERT INTO activities(favourite_id, name, start_at, end_at)
VALUES
-- Japan
    (1, 'Visit Tokyo Tower', '2022-01-29T11:00:00', '2022-01-29T11:00:00'),
    (1, 'Attend a Tea Ceremony', '2022-01-29T14:00:00', '2022-01-29T16:00:00'),
    (1, 'Try Ramen Noodles', '2022-01-29T18:00:00', '2022-01-30T17:00:00'),
    (1, 'Visit a Hot Spring', '2022-01-30T17:00:00', '2022-01-31T11:00:00'),
-- Honolulu
    (3, 'Try Hula Dancing', '2022-02-01T:15:00:00', '2022-02-01T16:00:00'),
    (3, 'Go Snorkeling', '2022-02-03T10:00:00', '2022-02-03T11:00:00'),
-- Las Vegas
    (4, 'Visit the Hover Dam', '2022-01-30T09:00:00', '2022-01-30T13:00:00'),
    (4, 'See a Cirque du Soleil show', '2022-01-30T22:00:00', '2022-01-31T00:0000');