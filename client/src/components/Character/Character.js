import React from 'react';
import { Box, Heading } from 'grommet';

function Character(props) {
  const { characterData } = props;

  console.log(characterData);
  return (
    <Box>
      <Heading>Your character</Heading>
    </Box>
  )
}

export default Character;
