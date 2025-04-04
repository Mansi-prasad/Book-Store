import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/BookModels.js";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
import cors from "cors";
//MiddleWare for parsing request body otherwise you will get an error.
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the express js.");
});

//middleware
app.use("/books", bookRoutes);

// Middleware for handlig CORS Policy
//option 1: Allow all origins with default of cors(*)
// app.use(cors()); // for all

// Allow requests from http://localhost:5173
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

//option2: Allow Custom Origins
// because our ip is different for this project
// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to databases.");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//install cors(cross origin resource sharing) that is used as middleware
