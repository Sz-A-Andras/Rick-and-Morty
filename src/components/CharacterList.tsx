import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Image,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

interface Characters {
  characters: Character[];
}

const CharacterList = ({ characters }: Characters) => {
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
                  <Button colorScheme="teal" size="md">
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