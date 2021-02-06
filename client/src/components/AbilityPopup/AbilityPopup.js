import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import Search from '../Search/Search';

function AbilityPopup(props) {
  const { ability, onUseAbility, allCharacterData, characterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ isAbilitySearchOpen, setIsAbilitySearchOpen ] = useState(false);


  function handleAbilitySearchClose() {
    setIsAbilitySearchOpen(false);
  }

  function handleUseAbilitySubmit(e) {
    const id = e.target.value;
    onUseAbility(ability, id);
    handleAbilitySearchClose();
  }

  function useAbility() {
    onClose();
    setIsAbilitySearchOpen(true);
  }

  return (
    <>
      <Button
        variant="ghost"
        value="ability"
        disabled={ability.uses !== 0 ? false : true}
        onClick={onOpen}
        size="lg"
      >
        {ability.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ability.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{ability.text}</Text>
            <Text>Uses: {ability.uses > 0 ? ability.uses : 'Unlimited Uses'}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={useAbility} disabled={true}>
              Use
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Search
        isOpen={isAbilitySearchOpen}
        onClose={handleAbilitySearchClose}
        allCharacterData={allCharacterData}
        characterData={characterData}
        onClick={handleUseAbilitySubmit}
      />
    </>
  );
}

export default AbilityPopup;
