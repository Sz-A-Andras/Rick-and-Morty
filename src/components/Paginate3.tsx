import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  pgnumber: number;
  paginate: (number: number) => void;
  currentPageNumber: number;
}

const Paginate3 = ({ pgnumber, paginate, currentPageNumber }: Props) => {
  const pagenumbers = [];
  for (let i = 1; i <= pgnumber / 10; i++) {
    pagenumbers.push(i);
  }
  const teritory = [];
  teritory[0] = currentPageNumber - 2;
  teritory[1] = currentPageNumber - 1;
  teritory[2] = currentPageNumber + 1;
  teritory[3] = currentPageNumber + 2;
  return (
    <Center>
      <Box mx="200px" my="10px" textAlign="center">
        <HStack spacing="20px">
          {teritory.map((num) => (
            <Button
              w="40px"
              h="40px"
              bg="teal"
              key={num}
              onClick={() => paginate(num)}
              className="page-number"
              textAlign="center"
              textColor="white"
            >
              {num}
            </Button>
          ))}
        </HStack>
      </Box>
    </Center>
  );
};

export default Paginate3;
