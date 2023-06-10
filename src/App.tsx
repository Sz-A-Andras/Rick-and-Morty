import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

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

  return (
    <Grid templateAreas={`"nav" " main"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <CharacterList characters={characters} />;
      </GridItem>
    </Grid>
  );
}

export default App;
