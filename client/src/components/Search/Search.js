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
  const { isOpen, setSearch } = props;

  function handleClose() {
    setSearch(false);
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Search;
