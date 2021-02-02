import React from 'react';
import {
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from '@chakra-ui/react';

function Search(props) {
  const { isOpen, setSearch, allCharacterData } = props;

  function handleClose() {
    setSearch(false);
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Search Bar
          </DrawerHeader>
          <Input></Input>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Search;
