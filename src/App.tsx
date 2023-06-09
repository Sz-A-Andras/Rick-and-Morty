import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
}

function App() {
  const characters0 = [
    { id: 0, name: "aaa", species: "bbb", status: "ccc" },
    { id: 1, name: "aaa", species: "bbb", status: "ccc" },
    { id: 2, name: "aaa", species: "bbb", status: "ccc" },
  ];

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  return <CharacterList characters={characters} />;
}

export default App;
