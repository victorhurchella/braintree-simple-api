import { NextFunction, Request, Response } from "express";
import GetClientTokenUseCase from "../../useCases/GetClientToken.useCase";
import { IGetClientTokenDTO } from "./GetClientToken.DTO";

export default class GetClientTokenController {
  constructor(private getClientTokenUseCase: GetClientTokenUseCase) {
    this.getClientTokenUseCase = getClientTokenUseCase;
  }

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { customerId } = request.params as unknown as IGetClientTokenDTO;

    try {
      const clientToken = await this.getClientTokenUseCase.execute(customerId);

      return response.status(201).json({ clientToken });
    } catch (err) {
      return next(err);
    }
  }
}
