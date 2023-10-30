interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ className, children }) => (
  <div className={`bg-gray-200 rounded overflow-hidden shadow-lg ${className}`}>
    {children}
  </div>
);

export default Card;
