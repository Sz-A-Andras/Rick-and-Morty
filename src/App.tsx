import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character } from "./components/CharacterList";

//interface Character {
//id: number;
//name: string;
//species: string;
//status: string;
//}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  return <CharacterList characters={characters} />;
}

export default App;
