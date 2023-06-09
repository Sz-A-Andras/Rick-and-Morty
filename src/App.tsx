import { useState } from "react";
import CharacterList from "./components/CharacterList";

function App() {
  const characters = [
    { id: 0, name: "aaa", species: "bbb", status: "ccc" },
    { id: 1, name: "aaa", species: "bbb", status: "ccc" },
    { id: 2, name: "aaa", species: "bbb", status: "ccc" },
  ];

  return <CharacterList characters={characters} />;
}

export default App;
