interface IProps {
  label: string;
  text: string;
}

const PlayerLabel: React.FC<IProps> = ({ label, text }) => (
  <div className="flex">
    <span className="font-bold">{`${label}:`}</span>
    <span className="text-gray-700 text-base ml-1">{text}</span>
  </div>
);

export default PlayerLabel;
