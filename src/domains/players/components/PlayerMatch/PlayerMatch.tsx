import { formatMinutesToText } from "@/shared/utils/date";
import { IPlayerMatch } from "../../players.model";
import { getMatchDurationAsMinutes } from "../../players.utils";
import PlayerLabel from "../PlayerLabel/PlayerLabel";

const PlayerMatch: React.FC<IPlayerMatch> = ({
  startTime,
  endTime,
  players,
  winner,
}) => (
  <div className="w-1/1 p-1 bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg pt-4">
    <PlayerLabel
      label="Players"
      text={`${players[0].firstname} ${players[0].lastname} VERSUS ${players[1].firstname} ${players[1].lastname}`}
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
    <PlayerLabel
      label="Winner"
      text={`${winner.firstname} ${winner.lastname}`}
    />
  </div>
);

export default PlayerMatch;
