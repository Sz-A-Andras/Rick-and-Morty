import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Rick_and_Morty.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default NavBar;
