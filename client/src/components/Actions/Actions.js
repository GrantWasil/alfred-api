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

  function handleOpenSearch(e) {
    console.log(e);
    setSearch(true);
  }

  return (
    <Stack spacing={3}>
      <Heading>Actions</Heading>
      <Box>
        <Heading size="l">Money</Heading>
        <Text>${characterData.money}</Text>
        <Button onClick={handleOpenSearch}>Pay</Button>
      </Box>
    </Stack>
  );
}

export default Actions;
