export interface IPlayer {
  id: string;
  firstname: string;
  lastname: string;
  picture: IPlayerPicture;
  stats: IPlayerStats;
  country: IPlayerCountry;
}

export interface IPlayerComputedProps {
  totalTimePlayed?: number;
  winCount?: number;
  looseCount?: number;
  widthBackHomeButton?: boolean;
}

export type PlayerRouteParams = {
  playerId: string;
};

export interface IPlayerPicture {
  url: string;
}

export interface IPlayerMatch {
  players: IPlayer[];
  winner: IPlayer;
  startTime: string;
  endTime: string;
}

export interface IPlayerStats {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
}

export interface IPlayerCountry {
  picture: IPlayerPicture;
  code: string;
}
