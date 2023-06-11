import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  rowsPerPage: number;
  totalRows: number;
  paginate: (number: number) => void;
}

const Paginate = ({ rowsPerPage, totalRows, paginate }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Center>
      <Box mx="200px" my="10px" textAlign="center">
        <HStack spacing="20px">
          {pageNumbers.map((number) => (
            <Button
              w="40px"
              h="40px"
              bg="teal"
              key={number}
              onClick={() => paginate(number)}
              className="page-number"
              textAlign="center"
            >
              {number}
            </Button>
          ))}
        </HStack>
      </Box>
    </Center>
  );
};

export default Paginate;
