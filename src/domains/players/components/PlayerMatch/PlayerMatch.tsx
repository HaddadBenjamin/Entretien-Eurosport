import { formatMinutesToText } from "@/shared/utils/date";
import { IPlayer, IPlayerMatch } from "../../players.model";
import { getMatchDurationAsMinutes } from "../../players.utils";
import LabelWithText from "@/shared/components/LabelWithText/LabelWithText";
import Card from "@/shared/components/Card/Card";

interface IProps {
  playerId: string;
}

const PlayerMatch: React.FC<IPlayerMatch & IProps> = ({
  startTime,
  endTime,
  players,
  winner,
  playerId,
}) => {
  const { firstname, lastname }: IPlayer = players.find(
    ({ id }) => id !== playerId
  )!;

  return (
    <Card className="w-96 p-3">
      <LabelWithText label="Opponent" text={`${firstname} ${lastname}`} />
      <LabelWithText
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
    </Card>
  );
};

export default PlayerMatch;
