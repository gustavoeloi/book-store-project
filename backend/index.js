import express from "express";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";

// models
import { Book } from "./models/bookModel.js";

// routes
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());
app.use("/api", booksRoute);

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
