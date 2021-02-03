import React from 'react';
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Search from '../Search/Search';

function Actions(props) {
  const { characterData, allCharacterData } = props;
  const { isOpen, onOpen } = useDisclosure();

  return (
    <Stack spacing={3}>
      {characterData.name ? (
        <>
          <Heading>Actions</Heading>
          <Box>
            <Heading size="l">Money</Heading>
            <Text>${characterData.money}</Text>
            <Button value="pay" rounded="md" onClick={onOpen}>
              Pay
            </Button>
          </Box>
          <Search
            isOpen={isOpen}
            setSearch={onOpen}
            allCharacterData={allCharacterData}
            characterData={characterData}
          />
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default Actions;
