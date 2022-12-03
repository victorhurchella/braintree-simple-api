import GetPlayer from "@/modules/Player/GetPlayer";
import { Router } from "express";

const playerRouter = Router({ mergeParams: true });

playerRouter.get("/", async (request, response, next) => {
  const { getPlayerController } = GetPlayer();

  return getPlayerController.handle(request, response, next);
});

export default playerRouter;
