import { Grid, GridItem } from "@chakra-ui/react";
import Opcao from "./Opcoes";

export default function Opcoes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Opcao icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Opcao icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Opcao icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Opcao icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Opcao icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
