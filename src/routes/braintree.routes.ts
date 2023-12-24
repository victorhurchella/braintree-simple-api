import CreateTransaction from "@/modules/Braintree/controllers/CreateTransaction";
import GetClientToken from "@/modules/Braintree/controllers/GetClientToken";
import { Router } from "express";

const braintreeRouter = Router({ mergeParams: true });

braintreeRouter.get(
  "/client-token/:customerId",
  async (request, response, next) => {
    const { getClientTokenController } = GetClientToken();

    return getClientTokenController.handle(request, response, next);
  }
);

braintreeRouter.post("/transaction", async (request, response, next) => {
  const { createTransactionController } = CreateTransaction();

  return createTransactionController.handle(request, response, next);
});

export default braintreeRouter;
