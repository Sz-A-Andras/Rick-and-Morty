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
import CharacterFilter from "./components/CharacterFilterBySpecies";
import CharacterFilterBySpecies from "./components/CharacterFilterBySpecies";
import CharacterFilterByName from "./components/CharacterFilterByName";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [selectedCharacterBySpecies, setselectedCharacterBySpecies] =
    useState("");

  const [selectedCharacterByName, setselectedCharacterByName] = useState("");

  let visible = characters;

  if (selectedCharacterBySpecies !== "") {
    visible = characters.filter(
      (c) =>
        c.name.includes(selectedCharacterByName) &&
        c.species === selectedCharacterBySpecies
    );
    console.log(selectedCharacterBySpecies);
  } else if (selectedCharacterBySpecies === null) {
    visible = characters;
  } else {
    visible = characters.filter((c) =>
      c.name.includes(selectedCharacterByName)
    );
  }
  const visibleByName =
    selectedCharacterByName || selectedCharacterBySpecies
      ? characters.filter(
          (c) =>
            c.name.includes(selectedCharacterByName) &&
            c.species === selectedCharacterBySpecies
        )
      : characters;

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  const visibleCharactersBySpecies = selectedCharacterBySpecies
    ? characters.filter((c) => c.species === selectedCharacterBySpecies)
    : characters;

  return (
    <Grid templateAreas={`"nav" " main"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <div className="mb-3">
          <CharacterFilterBySpecies
            onSelectCharacter={(char) => setselectedCharacterBySpecies(char)}
          ></CharacterFilterBySpecies>
          <CharacterFilterByName
            onSelectCharacterName={(char) => setselectedCharacterByName(char)}
          ></CharacterFilterByName>
        </div>
        <CharacterList characters={visible} />;
      </GridItem>
    </Grid>
  );
};

export default Home;
