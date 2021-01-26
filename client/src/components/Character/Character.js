import React from 'react';
import { Box, Heading, Paragraph, Text } from 'grommet';

function Character(props) {
  const { characterData } = props;

  console.log(characterData);
  return (
    <Box>
      <Heading>{characterData.name}</Heading>
      <Text>`How people see you: {characterData.traits}</Text>
      <Paragraph>`Some information to help you prepare: {characterData.preview}</Paragraph>

      <Text>You will recieve more information about your character on the day of the event. Feel free to ask Grant if you have any questions</Text>
    </Box>
  )
}

export default Character;
