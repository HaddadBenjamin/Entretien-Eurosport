import { FC } from "react";

interface IProps {
  className?: string;
  centered?: boolean;
  text: string;
}

const BoldTitle: FC<IProps> = ({ text, className, centered = true }) => (
  <div
    className={`font-bold text-xl  ${
      centered && "flex justify-center"
    } ${className}`}
  >
    {text}
  </div>
);

export default BoldTitle;
