import { Box, Input, Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  onSelectCharacterName: (name: string) => void;
}
const CharacterFilterByName = ({ onSelectCharacterName }: Props) => {
  return (
    <>
      <Box mx="200px" my="50px">
        <text>Filter by name:</text>
      </Box>
      <Box mx="200px" my="50px" textAlign="center">
        <Input
          type="text"
          onChange={(event) => onSelectCharacterName(event.target.value)}
        ></Input>
      </Box>
    </>
  );
};

export default CharacterFilterByName;
