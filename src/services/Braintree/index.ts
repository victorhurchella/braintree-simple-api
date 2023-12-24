import config from "@/config";
import {
  BraintreeGateway,
  ClientToken,
  Environment,
  TransactionRequest,
} from "braintree";
import { IBraintree } from "./types";

export default class Braintree implements IBraintree {
  braintree: BraintreeGateway;

  constructor(braintree?: BraintreeGateway) {
    this.braintree =
      braintree ||
      new BraintreeGateway({
        environment: Environment.Sandbox,
        merchantId: config.braintree.merchantId,
        privateKey: config.braintree.privateId,
        publicKey: config.braintree.publicID,
      });
  }

  async createTransaction(transactionData: TransactionRequest) {
    return this.braintree.transaction.sale(transactionData).then((result) => {
      return result;
    });
  }

  async generateClientToken(customerId: string) {
    return this.braintree.clientToken
      .generate({
        customerId,
      })
      .then((response: ClientToken) => {
        return response.clientToken;
      });
  }
}
