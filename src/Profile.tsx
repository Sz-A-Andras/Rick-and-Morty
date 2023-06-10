import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "./components/CharacterList";
import { List, ListItem } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const Profile = () => {
  const [character, setCharacter] = useState<Character>();
  const [searchParams] = useSearchParams();
  const characterId = searchParams.get("id");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + characterId)
      .then((res) => setCharacter(res.data));
  }, []);
  return (
    <List>
      <ListItem key={character?.id}>
        <Image src={character?.image}></Image>
      </ListItem>
      <ListItem key={character?.id}>{character?.id}</ListItem>
      <ListItem key={character?.id}>{character?.name}</ListItem>
      <ListItem key={character?.id}>{character?.species}</ListItem>
      <ListItem key={character?.id}>{character?.status}</ListItem>
      <ListItem key={character?.id}>{character?.type}</ListItem>
      <ListItem key={character?.id}>{character?.gender}</ListItem>
    </List>
  );
};

export default Profile;
