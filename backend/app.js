const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const flightRouter = require("./routes/flights")
const favouritesRouter = require("./routes/favourites")
const airportsRouter = require("./routes/airports")

const app = express();
//const flightRoutes = require("./routes/flightsRoute");

const db = require("./db");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// //index router
// app.use("/index", indexRouter)

//tutorial
//console.log("HELPERS", helpers)

//index router
app.use("/index", indexRouter)
app.use("/flights", flightRouter(db));
// app.use('/', indexRouter);
app.use('/users', usersRouter(db));

app.use("/favourites", favouritesRouter(db));
app.use("/airports", airportsRouter(db));


module.exports = app;
