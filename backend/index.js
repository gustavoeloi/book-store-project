import express from "express";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";

import cors from "cors";

// routes
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());
app.use("/api", booksRoute);

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Permite apenas solicitações vindas desta origem
//     methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
//     allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
//   })
// );

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
