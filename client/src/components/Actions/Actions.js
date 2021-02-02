import React from 'react';
import { Stack, Flex, Button, Grid, GridItem } from '@chakra-ui/react';

function Actions(props) {
  const { setSearch, characterData } = props;

  function handleOpenSearch() {
    setSearch(true);
  }

  return (
    <Grid
      templateRows="repeat(5, 1fr)"
      templateColumns="repeate(3, 1fr)"
      gap={3}
    >
      <GridItem rowSpan={1} colSpan={3} bg="tomato" />
      <GridItem rowSpan={1} colSpan={1} bg="yellow" />
      <GridItem rowSpan={2} colSpan={2} bg="orange" />
      <GridItem rowSpan={1} colSpan={1} bg="purple" />
      <GridItem rowSpan={1} colSpan={1} bg="blue" />
      <GridItem rowSpan={1} colSpan={3} bg="red" />
    </Grid>
  );
}

export default Actions;
