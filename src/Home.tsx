import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import apiClient from "./services/api-client";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import CharacterFilterBySpecies from "./components/CharacterFilterBySpecies";
import CharacterFilterByName from "./components/CharacterFilterByName";
import Paginate from "./components/Paginate";
import Paginate2 from "./components/Paginate2";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerParge] = useState(20);
  const [pagecount, setPageCount] = useState(1);

  const indexOfLastRow = currentPage * rowsPerParge;
  const indexOfirstRow = indexOfLastRow - rowsPerParge;
  const currentRows = characters.slice(indexOfirstRow, indexOfLastRow);

  const [selectedCharacterBySpecies, setselectedCharacterBySpecies] =
    useState("");

  const [selectedCharacterByName, setselectedCharacterByName] = useState("");

  let [pagenumber, setPageNumber] = useState(1);

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
    apiClient
      .get("/character")
      .then((res) => setPageCount(parseInt(res.data.info.pages)));
  }, []);

  useEffect(() => {
    apiClient
      .get("/character?page=" + pagenumber)
      .then((res) => setCharacters(res.data.results));
  }, [pagenumber]);

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
        <Paginate2
          paginatePrev={() => setPageNumber(pagenumber - 1)}
          paginateNext={() => setPageNumber(pagenumber + 1)}
          number={pagenumber + "/" + pagecount}
        />
        <CharacterList characters={visible} />;
      </GridItem>
    </Grid>
  );
};

export default Home;
