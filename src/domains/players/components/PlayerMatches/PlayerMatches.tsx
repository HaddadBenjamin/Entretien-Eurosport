import { IPlayerMatch } from "../../players.model";
import PlayerMatch from "../PlayerMatch/PlayerMatch";

interface IProps {
  matches: IPlayerMatch[];
}

const PlayerMatches: React.FC<IProps> = ({ matches }) => (
  <div className="flex flex-wrap gap-4 mt-4">
    {matches.map((match, index) => (
      <PlayerMatch key={`player-match-${index}`} {...match} />
    ))}
  </div>
);

export default PlayerMatches;
