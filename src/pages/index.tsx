import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Opcoes from "../components/Opcoes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Opcoes />
    </Flex>
  );
}
