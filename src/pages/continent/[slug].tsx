import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";
import Content from "../../components/Content";

export default function Component() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
        <Content />
      </Flex>
    </Flex>
  );
}
