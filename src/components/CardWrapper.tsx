import React from "react";

import "../styles/CardWrapper.css";

interface Props {
  children: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  return <main className="card-wrapper">{children}</main>;
};

export default CardWrapper;
