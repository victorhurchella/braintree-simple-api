import { getSummonerByName } from "@/services/Riot/getSummoner";
import { NextFunction, Request, Response } from "express";
import { getSummonerTiers } from "@/services/Riot/getTiers";
import { IRequestQuery } from "./GetPlayerDTO";

export default class GetPlayerController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { summonerName, region } = request.query as IRequestQuery;

    try {
      const { response: summoner } = await getSummonerByName({
        name: summonerName,
        region: region,
      });

      const { response: summonerTiers } = await getSummonerTiers({
        id: summoner.id,
        region: region,
      });

      return response.status(201).json({ summoner, summonerTiers });
    } catch (err) {
      console.error(`[GetPlayerController] ${err}`);
      next(err);
    }
  }
}
