import React from 'react';
import { Box, Heading, Paragraph, Text } from 'grommet';

function Character(props) {
  const { characterData } = props;

  return (
    <Box align="center" justify="center" flex fill="vertical" pad={"small"}>
      <Heading>{characterData.name}</Heading>
      <Text textAlign="center">How people see you: {characterData.traits}</Text>
      <Paragraph textAlign="center">
        Some information to help you prepare: {characterData.preview}
      </Paragraph>

      <Heading level="2" textAlign="center">
        Grant will be posting more imporant information here in the next two
        days. Check back.
      </Heading>
      <Text>
        You will recieve more information about your character on the day of the
        event. Feel free to ask Grant if you have any questions
      </Text>
    </Box>
    );
}

export default Character;
