import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { translateStatus } from "./Helpers";

import Header from "./components/Header";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";

import charJson from "./data/rickandmorty.json";

function App() {
  const characters = charJson.characters;

  return (
    <div>
      <Header title="Galería de Imágenes con React" />
      <CardWrapper>
        {characters.map((character, index) => {
          return (
            <Card
              key={index}
              name={character.name}
              status={translateStatus(character.status)}
              src={character.image}
            />
          );
        })}
      </CardWrapper>
    </div>
  );
}

export default App;
