import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layer: React.FC<IProps> = ({ children }) => (
  <div className="w-full mx-auto max-w-7xl">{children}</div>
);

export default Layer;
