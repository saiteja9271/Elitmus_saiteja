import express from "express";
import dotenv from "dotenv";
import route from "./router/auth.js";
import cors from 'cors';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config({ path: "./config.env" });
app.use(cookieParser())
const db = process.env.DATABASE;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("conttected");
  }).catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use(cors(
  {
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    }
))
app.use(route);

app.listen(5000, () => {
  console.log("server is started");
});
