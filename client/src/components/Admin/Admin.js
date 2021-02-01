import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

function Admin(props) {
  const { onUpdateGamemode } = props;

  function onStageOneButton(e) {
    e.prevent.default();
    onUpdateGamemode(1);
  }

  function onStageTwoButton(e) {
    e.prevent.default();
    onUpdateGamemode(2);
  }

  function onStageThreeButton(e) {
    e.prevent.default();
    onUpdateGamemode(3);
  }

  return (
    <Stack spacing={3}>
      <Button colorScheme="green 100" onClick={onStageOneButton} >Stage 1</Button>
      <Button colorScheme="blue 100" onClick={onStageTwoButton} >Stage 2</Button>
      <Button colorScheme="purple 100" onClick={onStageThreeButton} >Stage 3</Button>
    </Stack>
  )
}

export default Admin;