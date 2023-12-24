import Braintree from "@/services/Braintree";
import { TransactionRequest } from "braintree";

export default class CreateTransactionUseCase {
  async execute(transactionData: TransactionRequest) {
    const braintree = new Braintree();

    const transaction = await braintree.createTransaction(transactionData);

    return {
      orderId: transaction.transaction.orderId,
      success: transaction.success,
      errors: transaction.errors,
    };
  }
}
