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
  Button,
} from '@chakra-ui/react';

function Search(props) {
  const { isOpen, setSearch, allCharacterData, characterData } = props;
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleClose() {
    setSearch(false);
    setInput('');
  }

  function CharacterSelect({ children }) {
    return (
      <Button variant="ghost">
        {children}
      </Button>
    );
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
            <Stack spacing={2} pt={2} align="center">
              {allCharacterData
                .filter(
                  (c) => c.name.includes(input) && c.name !== characterData.name
                )
                .map((character) => {
                  return <CharacterSelect>{character.name}</CharacterSelect>;
                })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Search;
