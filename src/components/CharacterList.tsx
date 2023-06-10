import { Button } from "@chakra-ui/react";
import { useNavigate, createSearchParams } from "react-router-dom";

import {
  Image,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
}

interface Characters {
  characters: Character[];
}

const CharacterList = ({ characters }: Characters) => {
  const navigate = useNavigate();
  const navigateToProfile = (id: number) => {
    navigate({
      pathname: "/Profile",
      search: createSearchParams({
        id: id.toString(),
      }).toString(),
    });
  };
  return (
    <Box mx="200px" my="50px" textAlign="center">
      <TableContainer>
        <Table className="table table-border" size="md">
          <Thead>
            <Tr>
              <Td>Avatar</Td>
              <Td>Name</Td>
              <Td>Species</Td>
              <Td>Status</Td>
              <Td>Info</Td>
            </Tr>
          </Thead>
          <Tbody>
            {characters.map((c) => (
              <Tr key={c.id}>
                <Td>
                  <Image src={c.image}></Image>
                </Td>
                <Td>{c.name}</Td>
                <Td>{c.species}</Td>
                <Td>{c.status}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => navigateToProfile(c.id)}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CharacterList;
