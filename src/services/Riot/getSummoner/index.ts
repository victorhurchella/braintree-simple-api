import { Constants } from "twisted";
import { IGetBySummoner } from "../types";
import api from "../api";

export async function getSummonerByName({ name, region }: IGetBySummoner) {
  return await api.Summoner.getByName(name, Constants.Regions[region]);
}
