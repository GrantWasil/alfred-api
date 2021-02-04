import React, { useState } from 'react';
import {
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Search from '../Search/Search';
import AbilityPopup from '../AbilityPopup/AbilityPopup';

function Actions(props) {
  const { characterData, allCharacterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, setIsModalOpen } = useState(false);

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handlePayClick(e) {
    console.log(e.target);
  }

  return (
    <Stack spacing={3} justify="center" textAlign="center">
      {characterData.name ? (
        <>
          <Heading>Actions</Heading>
          <Stack spacing={1} align="center">
            <Heading size="l">Money</Heading>
            <Text>${characterData.money}</Text>
            <Button
              value="pay"
              rounded="md"
              colorScheme="teal"
              onClick={onOpen}
            >
              Pay
            </Button>
          </Stack>
          <Heading size="l">Abilities</Heading>
          {characterData.abilities.map((a) => {
            return (
              <AbilityPopup ability={a} targetAbility={onOpen}/>
            );
          })}
          <Search
            isOpen={isOpen}
            onClose={onClose}
            allCharacterData={allCharacterData}
            characterData={characterData}
            onClick={handlePayClick}
          />
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default Actions;
