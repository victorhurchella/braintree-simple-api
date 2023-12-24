import { Transaction, TransactionRequest, ValidatedResponse } from "braintree";

export interface IBraintree {
  createTransaction(
    transactionData: TransactionRequest
  ): Promise<ValidatedResponse<Transaction>>;

  generateClientToken(customerId: string): Promise<string>;
}
