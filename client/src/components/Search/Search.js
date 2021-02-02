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
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Search(props) {
  const { isOpen, setSearch, allCharacterData } = props;
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleClose() {
    setSearch(false);
  }

  function CharacterSelect({ children }) {
    return (
      <Button
        variant="ghost"
        rightIcon={<ArrowForwardIcon />}
      >
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
            <Stack spacing={2} top={2} align="center">
              {allCharacterData
                .filter((c) => c.name.includes(input))
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
