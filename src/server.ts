import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import { AppDataSource } from "./data-source";

config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
