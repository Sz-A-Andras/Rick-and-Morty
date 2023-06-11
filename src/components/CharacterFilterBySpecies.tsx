import { Box, Select } from "@chakra-ui/react";

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
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Mythological Creature">Mythological Creature</option>
        <option value="Disease">Disease</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="unknown">unknown</option>
      </Select>
    </Box>
  );
};

export default CharacterFilterBySpecies;
