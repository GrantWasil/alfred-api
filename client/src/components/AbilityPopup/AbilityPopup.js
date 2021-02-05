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
import useStateWithCallback from 'use-state-with-callback';

function AbilityPopup(props) {
  const { ability, onUseAbility, allCharacterData, characterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ isAbilitySearchOpen, setIsAbilitySearchOpen ] = useState(false);
  const [ abilityID, setAbilityID ] = useStateWithCallback('', id => {
    if (id !== '') {
      submitData();
    }
  });

  function handleAbilitySearchClose() {
    setIsAbilitySearchOpen(false);
    setAbilityID('');
  }

  function handleUseAbilitySubmit(e) {
    setAbilityID(e.target.value)
  }

  function submitData() {
    onUseAbility(ability, abilityID);
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
            <Button colorScheme="blue" mr={3} onClick={useAbility}>
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
