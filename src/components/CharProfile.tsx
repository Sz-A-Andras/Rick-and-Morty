import { Box, Button, Center, List, ListItem, Image } from "@chakra-ui/react";
import { Character } from "./CharacterList";

interface Props {
  char: Character;
  navigate: () => void;
}

const CharProfile = ({ char, navigate }: Props) => {
  return (
    <>
      <Center>
        <Box mx="200px" my="50px" textAlign="center">
          <List>
            <ListItem key={char?.id} textAlign="center">
              <Image src={char?.image}></Image>
            </ListItem>
            <ListItem>Id: {char?.id}</ListItem>
            <ListItem>Name: {char?.name}</ListItem>
            <ListItem>Species: {char?.species}</ListItem>
            <ListItem>Status: {char?.status}</ListItem>
            <ListItem>
              Type: {char?.type === "" ? "Unknown" : char?.type}
            </ListItem>
            <ListItem>Gender: {char?.gender}</ListItem>
            <ListItem>Origin: {char?.origin.name}</ListItem>
            <ListItem>Current location: {char?.location.name}</ListItem>
            <ListItem>
              <Button colorScheme="teal" size="md" onClick={navigate}>
                Back
              </Button>
            </ListItem>
          </List>
        </Box>
      </Center>
    </>
  );
};

export default CharProfile;
