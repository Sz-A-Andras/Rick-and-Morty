import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import CharacterFilterBySpecies from "./components/CharacterFilterBySpecies";
import CharacterFilterByName from "./components/CharacterFilterByName";
import Paginate from "./components/Paginate";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerParge] = useState(3);

  const indexOfLastRow = currentPage * rowsPerParge;
  const indexOfirstRow = indexOfLastRow - rowsPerParge;
  const currentRows = characters.slice(indexOfirstRow, indexOfLastRow);

  const [selectedCharacterBySpecies, setselectedCharacterBySpecies] =
    useState("");

  const [selectedCharacterByName, setselectedCharacterByName] = useState("");

  let visible = currentRows;

  if (selectedCharacterBySpecies !== "") {
    visible = currentRows.filter(
      (c) =>
        c.name.includes(selectedCharacterByName) &&
        c.species === selectedCharacterBySpecies
    );
  } else {
    visible = currentRows.filter((c) =>
      c.name.includes(selectedCharacterByName)
    );
  }

  const paginate = (number: number) => {
    setCurrentPage(number);
  };

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
        <div className="mb-3">
          <CharacterFilterBySpecies
            onSelectCharacter={(char) => setselectedCharacterBySpecies(char)}
          ></CharacterFilterBySpecies>
          <CharacterFilterByName
            onSelectCharacterName={(char) => setselectedCharacterByName(char)}
          ></CharacterFilterByName>
        </div>
        <CharacterList characters={visible} />;
        <Paginate
          rowsPerPage={rowsPerParge}
          totalRows={characters.length}
          paginate={paginate}
        />
      </GridItem>
    </Grid>
  );
};

export default Home;
