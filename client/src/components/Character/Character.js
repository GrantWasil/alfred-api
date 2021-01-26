import React from 'react';
import { Box, Heading, Paragraph, Text, Button } from 'grommet';
import MainHeader from '../MainHeader/MainHeader';

function Character(props) {
  const { characterData, onLogoutCharacter } = props;

  return (
    <Box align="center" justify="center" flex fill="vertical">
      <MainHeader />
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
      <Button pad={{top: 'medium'}} secondary onClick={onLogoutCharacter} label="Sign Out" />
    </Box>
  );
}

export default Character;
