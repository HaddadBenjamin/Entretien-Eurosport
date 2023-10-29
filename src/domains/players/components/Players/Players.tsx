import { useQuery } from "@apollo/client";
import { GET_MACTCHES, GET_PLAYERS } from "../../players.query";
import { IPlayer, IPlayerComputedProps } from "../../players.model";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useEffect, useState } from "react";
import { getPlayerComputedProps } from "../../players.utils";

const Players: React.FC = () => {
  const {
    error: playersError,
    loading: playersLoading,
    data: playersResponse,
  } = useQuery(GET_PLAYERS);
  const {
    error: matchesError,
    loading: matchesLoading,
    data: matchesResponse,
  } = useQuery(GET_MACTCHES);
  const [playersComputedProps, setPlayersComputedProps] = useState<
    Map<string, IPlayerComputedProps>
  >(new Map());

  useEffect(() => {
    if (matchesResponse && playersResponse) {
      setPlayersComputedProps(
        new Map(
          playersResponse.players.map(({ id }: IPlayer) => [
            id,
            getPlayerComputedProps(id, matchesResponse.matches),
          ])
        )
      );
    }
  }, [matchesResponse, playersResponse]);

  return (
    <div className="flex flex-wrap gap-4">
      {playersLoading || matchesLoading
        ? "Loading..."
        : playersError || matchesError
        ? "Error..."
        : playersResponse?.players?.map((player: IPlayer) => (
            <PlayerCard
              {...player}
              key={`player-${player.id}`}
              {...(playersComputedProps?.get(player.id) ?? {})}
            />
          ))}
    </div>
  );
};

export default Players;
