import { formatMinutesToText } from "@/shared/utils/date";
import { IPlayerMatch } from "../../players.model";
import { getMatchDurationAsMinutes } from "../../players.utils";
import PlayerLabel from "../PlayerLabel/PlayerLabel";

interface IProps {
  playerId: string;
}

const PlayerMatch: React.FC<IPlayerMatch & IProps> = ({
  startTime,
  endTime,
  players,
  winner,
  playerId,
}) => (
  <div className="w-1/1 p-1 bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg p-3">
    <PlayerLabel
      label="Opponent"
      text={`${players.find(({ id }) => id !== playerId)!.firstname} ${
        players.find(({ id }) => id !== playerId)!.lastname
      }`}
    />
    <PlayerLabel
      label="Match duration"
      text={formatMinutesToText(
        getMatchDurationAsMinutes({
          startTime,
          endTime,
          players,
          winner,
        })
      )}
    />
  </div>
);

export default PlayerMatch;
