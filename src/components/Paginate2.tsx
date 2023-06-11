import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  paginatePrev: () => void;
  paginateNext: () => void;
  number: number;
}

const Paginate = ({ paginatePrev, paginateNext, number }: Props) => {
  return (
    <Center>
      <Box mx="200px" my="10px" textAlign="center">
        <HStack spacing="20px">
          <Button onClick={paginatePrev}>Previos</Button>
          <Button w="40px" h="40px" bg="teal">
            {number}
          </Button>
          <Button onClick={paginateNext}>Next</Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default Paginate;
