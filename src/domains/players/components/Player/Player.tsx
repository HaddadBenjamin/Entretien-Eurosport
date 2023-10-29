import { useQuery } from "@apollo/client";
import { GET_PLAYER } from "../../players.query";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useParams } from "react-router-dom";
import { PlayerRouteParams } from "../../players.model";

const Player: React.FC = () => {
  const { playerId } = useParams<PlayerRouteParams>();
  const { error, loading, data } = useQuery(GET_PLAYER, {
    variables: { id: playerId },
  });

  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        "Loading..."
      ) : error ? (
        "Error..."
      ) : (
        <PlayerCard {...data.player} key={`player-${data.player.id}`} />
      )}
    </div>
  );
};

export default Player;
