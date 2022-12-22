import React from "react";

import "../styles/Header.css";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => (
  <nav className="main-nav">
    <h1 className="main-title">{title}</h1>
  </nav>
);

export default Header;
