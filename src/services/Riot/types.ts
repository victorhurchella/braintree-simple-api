export type TRegion =
  | "BRAZIL"
  | "EU_EAST"
  | "EU_WEST"
  | "KOREA"
  | "LAT_NORTH"
  | "LAT_SOUTH"
  | "AMERICA_NORTH"
  | "OCEANIA"
  | "TURKEY"
  | "RUSSIA"
  | "JAPAN"
  | "PBE";

export interface IGetBySummoner {
  name: string;
  region: TRegion;
}

export interface IGetById {
  id: string;
  region: TRegion;
}
