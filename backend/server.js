import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server is up & runing on port ${PORT}`);
});
