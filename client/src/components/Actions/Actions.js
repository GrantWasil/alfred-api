import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

function Actions(props) {
  const { setSearch } = props;

  function handleOpenSearch() {
    setSearch(true);
  }

  return (
    <Stack>
      <Button onClick={handleOpenSearch}>Open Drawer</Button>
    </Stack>
  );
}

export default Actions;
