const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const db = require("./db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const flightRouter = require("./routes/flights")
const favouritesRouter = require("./routes/favourites")
const airportsRouter = require("./routes/airports")

const app = express();
//const flightRoutes = require("./routes/flightsRoute");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//index router
app.use("/index", indexRouter)
app.use("/api/flights", flightRouter(db));
// app.use('/', indexRouter);
app.use('/users', usersRouter(db));


app.use("/user", favouritesRouter(db));
app.use("/airports", airportsRouter(db));


module.exports = app;
