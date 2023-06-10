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

const Home = () => {
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
};

export default Home;
