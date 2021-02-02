import React, { useState } from 'react';
import {
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Text,
} from '@chakra-ui/react';

function Search(props) {
  const { isOpen, setSearch, allCharacterData } = props;
  const [ input, setInput ]= useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleClose() {
    setSearch(false);
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Bar</DrawerHeader>
          <DrawerBody>
            <Input
              placeholder="Enter Character's Name"
              value={input}
              onChange={handleInputChange}
            />
            <Stack spacing={2} top={2} align="center">
              {allCharacterData.filter((c) => c.name.includes(input)).map((character) => {
                return (
                  <Text>{character.name}</Text>
                )
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Search;
