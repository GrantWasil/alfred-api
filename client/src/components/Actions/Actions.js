import React from 'react';
import { Stack, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

function Actions(props) {
  const { setSearch, characterData } = props;

  function handleOpenSearch() {
    setSearch(true);
  }

  return (
    <>
      {characterData.name ? (
        <Grid
          h="80vh"
          w="80vw"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={3}
        >
          <GridItem rowSpan={1} colSpan={3}>
            <Stack textAlign="center">
              <Heading>{characterData.name}</Heading>
              <Stack direction={'row'} spacing={2} justify="space-between">
                <Text>Secret: {characterData.secret}</Text>
                <Text>Clue: {characterData.clue}</Text>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Heading size="l">Money</Heading>
            <Stack spacing={2}>
              <Text>${characterData.money}</Text>
              <Button
                colorScheme="teal"
                size="sm"
                maxw="20%"
                onClick={handleOpenSearch}
              >
                Pay
              </Button>
            </Stack>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2} overflowY="scroll">
            <Stack justify="start" spacing={2}>
              {characterData.bio.map((p) => (
                <Text>{p}</Text>
              ))}
            </Stack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="white">
            <Stack justify="start" spacing={2}>
              {characterData.items.map((i) =>(
                <Text>{i}</Text>
              ))}
            </Stack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="white" />
          <GridItem rowSpan={1} colSpan={3} bg="tomato" />
        </Grid>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Actions;
