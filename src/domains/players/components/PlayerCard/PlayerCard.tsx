import { formatMinutesToText } from "../../../../shared/utils/date";
import { IPlayer, IPlayerComputedProps } from "../../players.model";
import { Link } from "react-router-dom";
import PlayerLabel from "../PlayerLabel/PlayerLabel";

const PlayerCard: React.FC<IPlayer & IPlayerComputedProps> = ({
  firstname,
  lastname,
  id,
  picture: { url },
  stats: { rank, points, weight, height, age },
  totalTimePlayed = 0,
  winCount = 0,
  looseCount = 0,
}) => (
  <Link
    to={`players/${id}`}
    className="w-1/3 p-3 bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg"
  >
    <img className="w-full" src={url} alt="Placeholder" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        {firstname} {lastname}
      </div>
      <PlayerLabel label="Rank" text={rank.toString()} />
      <PlayerLabel label="Points" text={points.toString()} />
      <PlayerLabel label="Weight" text={`${(weight / 1000).toString()}kg`} />
      <PlayerLabel label="Height" text={`${(height / 100).toString()}m`} />
      <PlayerLabel label="Age" text={age.toString()} />
      <PlayerLabel
        label="Time played"
        text={formatMinutesToText(totalTimePlayed)}
      />
      <PlayerLabel label="Win count" text={winCount.toString()} />
      <PlayerLabel label="Loose count" text={looseCount.toString()} />
    </div>
  </Link>
);

export default PlayerCard;
