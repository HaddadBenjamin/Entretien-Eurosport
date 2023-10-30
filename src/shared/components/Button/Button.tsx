interface IProps {
  text: string;
  className?: string;
}

const Button: React.FC<IProps> = ({ text, className }) => (
  <button className={`font-bold text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
    {text}
  </button>
);

export default Button;
