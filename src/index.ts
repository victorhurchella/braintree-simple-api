import cors from "cors";
import express from "express";
import router from "./routes";
import "dotenv/config";
import config from "./config";

const initializeApp = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  const port = config.api.port;
  app.listen(port, () => console.log(`Server is running in port ${port}`));
};

const main = initializeApp();

export default main;
