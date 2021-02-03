import React from 'react';

import { Stack, Heading, Text, Flex } from '@chakra-ui/react';

function Bio(props) {
  const { characterData } = props;
  return (
    <>
      {characterData.name ? (
        <Stack spacing={3} textAlign="center">
          <Heading>{characterData.name}</Heading>
          <Flex>
            <Heading size="l">Your secret: </Heading>
            <Text pl={1}>{characterData.secret}</Text>
          </Flex>
          <Flex>
            <Heading size="l">Your clue: </Heading>
            <Text pl={1}>{characterData.clue}</Text>
          </Flex>
          <Heading size="l">Starting tips:</Heading>
          {characterData.tips.map((t) => {
            return <Text>{t}</Text>;
          })}
          <Heading size="l">Your Bio:</Heading>
          {characterData.bio.map((p) => {
            return <Text>{p}</Text>;
          })}
        </Stack>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Bio;
