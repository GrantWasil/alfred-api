import React from 'react';
import {
  Box,
  Stack,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react';

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
            <Heading size="l">Your Items</Heading>
              {characterData.items.map((i) => (
                <Box border="1px solid">
                  <Text>{i}</Text>
                </Box>
              ))}
            </Stack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="white" />
          <GridItem rowSpan={1} colSpan={3}>
            <Wrap>
              {characterData.goals.map((g) => {
                return <Button>{g.name}</Button>
              })}
            </Wrap>
          </GridItem>
        </Grid>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Actions;
