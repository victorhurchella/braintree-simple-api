import { TransactionRequest } from "braintree";
import { NextFunction, Request, Response } from "express";
import CreateTransactionUseCase from "../../useCases/CreateTransaction.useCase";

export default class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {
    this.createTransactionUseCase = createTransactionUseCase;
  }

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { transactionData } = request.body as {
      transactionData: TransactionRequest;
    };

    try {
      const transaction = await this.createTransactionUseCase.execute(
        transactionData
      );

      return response.status(201).json({ transaction });
    } catch (err) {
      return next(err);
    }
  }
}
