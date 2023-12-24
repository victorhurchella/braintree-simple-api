import CreateTransactionUseCase from "../../useCases/CreateTransaction.useCase";
import CreateTransactionController from "./CreateTransaction.controller";

export default function CreateTransaction() {
  const createTransactionUseCase = new CreateTransactionUseCase();

  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase
  );

  return { createTransactionController, createTransactionUseCase };
}
