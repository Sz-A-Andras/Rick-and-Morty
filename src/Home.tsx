import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem, Link } from "@chakra-ui/react";
import {
  Routes,
  Route,
  useNavigate,
  Router,
  createSearchParams,
} from "react-router-dom";
import Profile from "./Profile";
import CharacterFilter from "./components/CharacterFilter";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [selectedCharacter, setSelectedCharacter] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  const visibleCharacters = selectedCharacter
    ? characters.filter((c) => c.species === selectedCharacter)
    : characters;

  return (
    <Grid templateAreas={`"nav" " main"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <div className="mb-3">
          <CharacterFilter
            onSelectCharacter={(char) => setSelectedCharacter(char)}
          ></CharacterFilter>
        </div>
        <CharacterList characters={visibleCharacters} />;
      </GridItem>
    </Grid>
  );
};

export default Home;
