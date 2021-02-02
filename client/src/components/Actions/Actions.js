import React from 'react';
import { Stack, Flex, Button, Grid, GridItem } from '@chakra-ui/react';

function Actions(props) {
  const { setSearch, characterData } = props;

  function handleOpenSearch() {
    setSearch(true);
  }

  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeate(3, 1fr)"
      gap={3}
    >
      <GridItem rowSpan={1} colSpan={3} bg="tomato" />
      <GridItem rowSpan={1} colSpan={1} bg="papayawhip" />
      <GridItem rowSpan={3} colSpan={2} bg="tomato" />
      <GridItem rowSpan={1} colSpan={1} bg="papayawhip" />
      <GridItem rowSpan={1} colSpan={1} bg="papayawhip" />
      <GridItem rowSpan={1} colSpan={3} bg="tomato" />
    </Grid>
  );
}

export default Actions;
