import express from 'express';

import campusesRouter from "./routers/campuses.routes.js";

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", campusesRouter);


app.use("/campuses", campusesRouter);
app.use("/locations", campusesRouter);

export default app;
