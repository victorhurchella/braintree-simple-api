import { IGetById } from "../types";
import api from "../api";
import { Constants } from "twisted";

export async function getSummonerTiers({ id, region }: IGetById) {
  return await api.League.bySummoner(id, Constants.Regions[region]);
}
