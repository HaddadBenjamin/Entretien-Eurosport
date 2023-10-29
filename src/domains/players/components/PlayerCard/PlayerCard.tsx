import { IPlayer, IPlayerComputedProps } from "../../players.model";
import PlayerLabel from "../PlayerLabel/PlayerLabel";
import { formatMinutesToText } from "@/shared/utils/date";
import Link from "next/link";
import Image from "next/image";

const PlayerCard: React.FC<IPlayer & IPlayerComputedProps> = ({
  firstname,
  lastname,
  id,
  picture: { url },
  stats: { rank, points, weight, height, age },
  country: {
    picture: { url: countryUrl },
  },
  totalTimePlayed = 0,
  winCount = 0,
  looseCount = 0,
  widthBackHomeButton,
}) => (
  <Link
    href={`/players/${id}`}
    className="w-1/1 p-1 bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg pt-4"
  >
    <Image
      src={url}
      width={245}
      height={337.5}
      alt={`Picture of ${firstname} ${lastname}`}
      className="m-auto mt-4"
    />
    <div className="px-6 py-4">
      <div className="flex mb-4 items-center justify-center">
        <Image
          src={countryUrl}
          width={48}
          height={32}
          alt={`Flag of ${firstname} ${lastname}`}
        />
        <span className="font-bold text-xl ml-2">
          {firstname} {lastname}
        </span>
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

      {widthBackHomeButton && (
        <Link href={"/"}>
          <div className="flex justify-center">
            <button className="font-bold text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2">
              Go back to home
            </button>
          </div>
        </Link>
      )}
    </div>
  </Link>
);

export default PlayerCard;
