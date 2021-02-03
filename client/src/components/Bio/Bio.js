import React from 'react';

import { Stack, Heading, Text, Flex } from '@chakra-ui/react';

function Bio(props) {
  const { characterData } = props;
  return (
    <Stack spacing={3} textAlign="center">
      <Heading>{characterData.name}</Heading>
      <Flex>
        <Heading size="l">Your secret: </Heading>
        <Text>{characterData.secret}</Text>
      </Flex>
      <Flex>
        <Heading size="l">Your clue: </Heading>
        <Text>{characterData.clue}</Text>
      </Flex>
      <Heading size="l">Bio</Heading>
      {characterData.bio.map((p) => {
        return <Text>{p}</Text>;
      })}
    </Stack>
  );
}

export default Bio;
