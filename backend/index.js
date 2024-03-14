import express from "express";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";

import cors from "cors";

// routes
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());
app.use("/api", booksRoute);

app.use(
  cors({
    origin: "http://localhost:5555",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
