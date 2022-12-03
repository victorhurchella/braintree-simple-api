import { Router } from "express";
import playerRouter from "./player.routes";

const routes = Router();

routes.use("/player", playerRouter);

export default routes;
