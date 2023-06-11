import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import apiClient from "./services/api-client";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import CharacterFilterBySpecies from "./components/CharacterFilterBySpecies";
import CharacterFilterByName from "./components/CharacterFilterByName";
import Paginate2 from "./components/Paginate2";
import Paginate3 from "./components/Paginate3";

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
    //setCurrentPage(number);
    setPageNumber(number);
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

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
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
            paginatePrev={() => {
              if (pagenumber === 1) {
                setPageNumber(pagenumber);
              } else {
                setPageNumber(pagenumber - 1);
              }
            }}
            paginateNext={() => {
              if (pagenumber === pagecount) {
                setPageNumber(pagenumber);
              } else {
                setPageNumber(pagenumber + 1);
              }
            }}
            number={pagenumber + "/" + pagecount}
          />
          <Paginate3
            pgnumber={pagecount}
            paginate={paginate}
            currentPageNumber={pagenumber}
          />
          <CharacterList characters={visible} />;
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
