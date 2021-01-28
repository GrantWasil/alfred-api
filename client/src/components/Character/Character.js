import React from 'react';
import { Heading, Paragraph, Text } from 'grommet';
import { Box } from '@chakra-ui/react';

function Character(props) {
  const { characterData } = props;

  return (
    <Box
    >
      <Heading>{characterData.name}</Heading>
      <Text textAlign="center">How people see you: {characterData.traits}</Text>
      <Paragraph textAlign="center">
        Some information to help you prepare: {characterData.preview}
      </Paragraph>
      <Text textAlign="center">
        This character information is only for you! You will recieve more
        information about your character on the day of the event. Feel free to
        ask Grant if you have any questions
      </Text>
    </Box>
  );
}

export default Character;
