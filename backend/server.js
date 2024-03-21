//import packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
//import routers
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";

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
//Allow requestes from body
app.use(express.json());
app.use(cookieParser());

//Use routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is up & runing on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
