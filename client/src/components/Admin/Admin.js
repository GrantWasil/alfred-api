import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

function Admin(props) {
  const { onUpdateGamemode } = props;

  function onStageOneButton() {
    onUpdateGamemode(1);
  }

  function onStageTwoButton() {
    onUpdateGamemode(2);
  }

  function onStageThreeButton() {
    onUpdateGamemode(3);
  }

  return (
    <Stack spacing={3}>
      <Button colorScheme="green" onClick={onStageOneButton} >Stage 1</Button>
      <Button colorScheme="blue" onClick={onStageTwoButton} >Stage 2</Button>
      <Button colorScheme="purple" onClick={onStageThreeButton} >Stage 3</Button>
    </Stack>
  )
}

export default Admin;