import GetClientTokenUseCase from "../../useCases/GetClientToken.useCase";
import GetClientTokenController from "./GetClientToken.controller";

export default function GetClientToken() {
  const getClientTokenUseCase = new GetClientTokenUseCase();

  const getClientTokenController = new GetClientTokenController(
    getClientTokenUseCase
  );

  return { getClientTokenController, getClientTokenUseCase };
}
