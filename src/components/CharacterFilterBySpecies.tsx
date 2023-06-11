import { Box, Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  onSelectCharacter: (species: string) => void;
}

const CharacterFilterBySpecies = ({ onSelectCharacter }: Props) => {
  return (
    <Box mx="200px" my="50px" textAlign="center">
      <Select
        className="form-select"
        onChange={(event) => onSelectCharacter(event.target.value)}
      >
        <option value="">All characters</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </Select>
    </Box>
  );
};

export default CharacterFilterBySpecies;
