import React from "react";

import "../styles/Card.css";

interface Props {
  name: string;
  status: string;
  src: string;
}

const Card: React.FC<Props> = ({ name, status, src }) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={src}
        alt={`Foto del personaje ${name}`}
      />
      <h4 className="card-title">{name}</h4>
      <p className="card-status">{status}</p>
    </div>
  );
};

export default Card;
