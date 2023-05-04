import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";

export default function Component() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
    </Flex>
  );
}
