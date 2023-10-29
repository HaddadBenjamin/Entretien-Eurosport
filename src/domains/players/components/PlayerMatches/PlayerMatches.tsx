import { IPlayerMatch } from "../../players.model";
import PlayerMatch from "../PlayerMatch/PlayerMatch";

interface IProps {
  matches: IPlayerMatch[];
  playerId: string;
}

const PlayerMatches: React.FC<IProps> = ({ matches, playerId }) => (
  <div className="flex flex-wrap gap-4 mt-4 justify-center">
    {matches.map((match, index) => (
      <PlayerMatch
        key={`player-match-${index}`}
        {...match}
        playerId={playerId}
      />
    ))}
  </div>
);

export default PlayerMatches;
