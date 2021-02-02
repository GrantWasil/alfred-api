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
  const { searchInput, setSearchInput } = useState('');

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
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
              value={searchInput}
              onChange={handleSearchInput}
            />
            <Stack spacing={2}>
              {allCharacterData
                .filter((character) => character.name.includes(searchInput))
                .map((includedCharacter) => {
                  return <Text>{includedCharacter.name}</Text>;
                })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Search;
