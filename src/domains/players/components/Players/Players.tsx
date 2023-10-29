import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../../players.query";
import { IPlayer } from "../../players.model";
import Player from "../Player/Player";

const Players: React.FC = () => {
  const { error, loading, data } = useQuery(GET_PLAYERS);

  return (
    <div>
      {loading
        ? "Loading..."
        : error
        ? "Error..."
        : data?.players?.map((player: IPlayer) => (
            <Player {...player} key={`player-${player.id}`} />
          ))}
    </div>
  );
};

export default Players;
