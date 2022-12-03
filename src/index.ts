import cors from "cors";
import express from "express";
import router from "./routes";
import "dotenv/config";

const initializeApp = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  const port = process.env.PORT ?? 3399;
  app.listen(port, () => console.log(`Server is running in port ${port}`));
};

const main = initializeApp();

export default main;
