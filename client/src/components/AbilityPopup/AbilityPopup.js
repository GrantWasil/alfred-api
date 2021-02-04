import React from 'react';
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
} from "@chakra-ui/react"

function AbilityPopup(props) {
  const { ability } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button
      variant="ghost"
      value="ability"
      disabled={ability.uses !== 0 ? false : true }
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
          <Text>Uses: {ability.uses}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Use
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default AbilityPopup;
