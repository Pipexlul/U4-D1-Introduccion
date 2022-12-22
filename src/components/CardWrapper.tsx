import React from "react";

import "../styles/CardWrapper.css";

interface Props {
  children: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};

export default CardWrapper;
