//import packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//import routers
import userRoute from "./routes/user.route.js";

//Config env
dotenv.config();

//Call env vars
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

//Configure mongoose
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

//Express
const app = express();

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is up & runing on port ${PORT}`);
});
