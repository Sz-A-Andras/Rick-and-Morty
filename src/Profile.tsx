import React, { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Character } from "./components/CharacterList";
import {
  Box,
  Button,
  Center,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const Profile = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const [character, setCharacter] = useState<Character>();
  const [searchParams] = useSearchParams();
  const characterId = searchParams.get("id");
  useEffect(() => {
    apiClient
      .get("/character/" + characterId)
      .then((res) => setCharacter(res.data));
  }, []);
  return (
    <>
      <Center>
        <Box mx="200px" my="50px" textAlign="center">
          <List>
            <ListItem key={character?.id} textAlign="center">
              <Image src={character?.image}></Image>
            </ListItem>
            <ListItem>Id: {character?.id}</ListItem>
            <ListItem>Name: {character?.name}</ListItem>
            <ListItem>Species: {character?.species}</ListItem>
            <ListItem>Status: {character?.status}</ListItem>
            <ListItem>
              Type: {character?.type === "" ? "Unknown" : character?.type}
            </ListItem>
            <ListItem>Gender: {character?.gender}</ListItem>
            <ListItem>Origin: {character?.origin.name}</ListItem>
            <ListItem>Current location: {character?.location.name}</ListItem>
            <ListItem>
              <Button colorScheme="teal" size="md" onClick={navigateToHome}>
                Back
              </Button>
            </ListItem>
          </List>
        </Box>
      </Center>
    </>
  );
};

export default Profile;
