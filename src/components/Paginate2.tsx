import { Box, Button, Center, HStack } from "@chakra-ui/react";

interface Props {
  paginatePrev: () => void;
  paginateNext: () => void;
  number: string;
}

const Paginate = ({ paginatePrev, paginateNext, number }: Props) => {
  return (
    <Center>
      <Box mx="200px" my="10px" textAlign="center">
        <HStack spacing="20px">
          <Button onClick={paginatePrev}>Previous</Button>
          <Button w="40px" h="40px" bg="teal" textColor="white">
            {number}
          </Button>
          <Button onClick={paginateNext}>Next</Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default Paginate;
