import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "./components/CharacterList";
import { Box, Button, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard";

const Profile = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const [character, setCharacter] = useState<Character>();
  const [searchParams] = useSearchParams();
  const characterId = searchParams.get("id");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + characterId)
      .then((res) => setCharacter(res.data));
  }, []);
  return (
    <Box mx="200px" my="50px" textAlign="center">
      <List>
        <ListItem key={character?.id} textAlign="center">
          <Image src={character?.image}></Image>
        </ListItem>
        <ListItem key={character?.id}>{character?.id}</ListItem>
        <ListItem key={character?.id}>{character?.name}</ListItem>
        <ListItem key={character?.id}>{character?.species}</ListItem>
        <ListItem key={character?.id}>{character?.status}</ListItem>
        <ListItem key={character?.id}>{character?.type}</ListItem>
        <ListItem key={character?.id}>{character?.gender}</ListItem>
        <ListItem>
          <Button colorScheme="teal" size="md" onClick={navigateToHome}>
            Back
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Profile;
