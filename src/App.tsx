import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { translateStatus } from "./Helpers";

import Header from "./components/Header";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import Footer from "./components/Footer";

import charJson from "./data/rickandmorty.json";

function App() {
  const characters = charJson.characters;

  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
