import React from "react";
import { Character } from "./CharacterList";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  char: Character;
}

const CharacterCard = ({ char }: Props) => {
  return (
    <Card>
      <Image src={char.image}></Image>
      <CardBody>
        <Heading>{char.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
