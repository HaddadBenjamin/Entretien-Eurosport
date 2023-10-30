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
import {
  getPlayerComputedProps,
  getPlayerWinMatches,
} from "../../players.utils";
import PlayerMatches from "../PlayerMatches/PlayerMatches";
import BoldTitle from "@/shared/components/BoldTitle/BoldTitle";

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
          <BoldTitle text="Player" className="mb-6" />
          <div className="flex  justify-center flex-wrap gap-4">
            <PlayerCard
              {...player}
              key={`player-${player.id}`}
              {...computedProps}
              widthBackHomeButton
            />
          </div>

          <BoldTitle text="Win games" className="mt-12 mb-6" />

          <PlayerMatches
            matches={getPlayerWinMatches(player.id, matchesResponse.matches)}
            playerId={playerId}
          />
        </div>
      )}
    </div>
  );
};

export default Player;
