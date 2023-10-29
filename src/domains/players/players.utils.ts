import { getMinutesFromDate } from "@/shared/utils/date";
import { IPlayerComputedProps, IPlayerMatch } from "./players.model";

export const getMatchDurationAsMinutes = ({
  startTime,
  endTime,
}: IPlayerMatch): number =>
  getMinutesFromDate(new Date(endTime)) -
  getMinutesFromDate(new Date(startTime));

export const getTotalTimePlayedByPlayerIdAsMinutes = (
  playerId: string,
  matches: IPlayerMatch[]
): number =>
  getPlayerMatches(playerId, matches)
    .map(getMatchDurationAsMinutes)
    .reduce(
      (playerTotalTimePlayer, matchDurationAsMilliseconds) =>
        playerTotalTimePlayer + matchDurationAsMilliseconds,
      0
    );

export const getPlayerMatches = (
  playerId: string,
  matches: IPlayerMatch[]
): IPlayerMatch[] =>
  matches.filter(({ players }) => players.some(({ id }) => id === playerId));

export const getPlayerWinMatches = (
  playerId: string,
  matches: IPlayerMatch[]
): IPlayerMatch[] =>
  getPlayerMatches(playerId, matches).filter(
    ({ winner: { id } }) => id === playerId
  );

export const getPlayerWinCount = (
  playerId: string,
  matches: IPlayerMatch[]
): number => getPlayerWinMatches(playerId, matches).length;

export const getPlayerLooseCount = (
  playerId: string,
  matches: IPlayerMatch[]
): number =>
  getPlayerMatches(playerId, matches).length -
  getPlayerWinCount(playerId, matches);

export const getPlayerComputedProps = (
  playerId: string,
  matches: IPlayerMatch[]
): IPlayerComputedProps => ({
  totalTimePlayed: getTotalTimePlayedByPlayerIdAsMinutes(playerId, matches),
  winCount: getPlayerWinCount(playerId, matches),
  looseCount: getPlayerLooseCount(playerId, matches),
});
