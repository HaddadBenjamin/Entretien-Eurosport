import { useQuery } from "@apollo/client";
import { GET_MACTCHES, GET_PLAYERS } from "../../players.query";
import PlayerCard from "../PlayerCard/PlayerCard";
import {
  PlayerRouteParams,
  IPlayerComputedProps,
  IPlayer,
  IPlayerMatch,
} from "../../players.model";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getPlayerComputedProps, getPlayerMatches } from "../../players.utils";
import PlayerMatches from "../PlayerMatches/PlayerMatches";

const Player: React.FC = () => {
  const { playerId } = useParams<PlayerRouteParams>();
  const {
    error: playerError,
    loading: playerLoading,
    data: playerResponse,
  } = useQuery(GET_PLAYERS);
  const [player, setPlayer] = useState<IPlayer | undefined>();
  const {
    error: matchesError,
    loading: matchesLoading,
    data: matchesResponse,
  } = useQuery(GET_MACTCHES);
  const [computedProps, setComputedProps] = useState<IPlayerComputedProps>();

  useEffect(() => {
    if (matchesResponse && playerResponse) {
      const playerValue = playerResponse.players.find(
        ({ id }: IPlayer) => id === playerId
      );

      if (playerValue) {
        setPlayer(playerValue);
        setComputedProps(
          getPlayerComputedProps(playerValue.id, matchesResponse.matches)
        );
      }
    }
  }, [matchesResponse, playerResponse]);

  return (
    <div>
      {playerLoading || matchesLoading ? (
        "Loading..."
      ) : playerError || matchesError || !player ? (
        "Error..."
      ) : (
        <div>
          <div className="flex flex-wrap gap-4">
            <PlayerCard
              {...player}
              key={`player-${player.id}`}
              {...computedProps}
              widthBackHomeButton
            />
          </div>

          <PlayerMatches
            matches={getPlayerMatches(player.id, matchesResponse.matches)}
          />
        </div>
      )}
    </div>
  );
};

export default Player;
