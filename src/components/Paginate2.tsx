import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  paginatePrev: () => void;
  paginateNext: () => void;
}

const Paginate = ({ paginatePrev, paginateNext }: Props) => {
  return (
    <Center>
      <Box mx="200px" my="10px" textAlign="center">
        <HStack spacing="20px">
          <Button onClick={paginatePrev}>Previos</Button>
          <Button onClick={paginateNext}>Next</Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default Paginate;
