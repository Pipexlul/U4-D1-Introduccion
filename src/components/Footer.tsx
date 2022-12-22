import React, { useEffect, useState, CSSProperties } from "react";

import "../styles/Footer.css";

const Footer: React.FC = () => {
  const [footerPosition, setFooterPosition] = useState<string>("static");

  useEffect(() => {
    window.addEventListener("resize", handleShrinkGrow);

    return () => {
      window.removeEventListener("resize", handleShrinkGrow);
    };
  }, []);

  const handleShrinkGrow = () => {
    if (document.body.scrollHeight > window.innerHeight) {
      setFooterPosition("static");
    } else {
      setFooterPosition("absolute");
    }
  };

  return (
    <footer
      style={{ position: footerPosition as CSSProperties["position"] }}
      className="main-footer"
    >
      <div className="main-footer-content">
        <p>
          Esta galeria de cartas consiste the una imagen, el nombre, y el estado
          de personajes del show Rick y Morty.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
