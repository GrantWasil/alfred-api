import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

function Character(props) {
  const { characterData } = props;

  return (
    <Flex
      textAlign="center"
      alignContent="space-between"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading>{characterData.name}</Heading>
      <Text>How people see you: {characterData.traits}</Text>
      <Text as="p">
        Some information to help you prepare: {characterData.preview}
      </Text>
      <Text as="p">
        This character information is only for you! You will recieve more
        information about your character on the day of the event. Feel free to
        ask Grant if you have any questions
      </Text>
    </Flex>
  );
}

export default Character;
