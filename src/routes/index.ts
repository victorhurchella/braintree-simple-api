import { Router } from "express";
import braintreeRouter from "./braintree.routes";

const routes = Router();

routes.use("/braintree", braintreeRouter);

export default routes;
