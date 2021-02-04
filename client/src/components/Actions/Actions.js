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
  Input,
} from '@chakra-ui/react';
import Search from '../Search/Search';
import AbilityPopup from '../AbilityPopup/AbilityPopup';

function Actions(props) {
  const { characterData, allCharacterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, setIsModalOpen } = useState(false);
  const { paymentAmount, setPaymentAmount } = useState(0);
  const { paymentTarget, setPaymentTarget } = useState('');
  const { paymentID, setPaymentID } = useState('');

  function handleModalClose() {
    setIsModalOpen(false);
    setPaymentTarget('');
    setPaymentAmount(0);
    setPaymentID('');
  }

  function handlePayClick(e) {
    let id = e.target.value;
    let target = e.target.textContent;
    console.log(id);
    console.log(target);
    setPaymentID(id);
    setPaymentTarget(target);
    setIsModalOpen(true);
  }

  function handleInputChange(e) {
    setPaymentAmount(e.target.value);
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
              <ModalHeader>Confirmation</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack spacing={2}>
                <Heading size="l">Payment to {paymentTarget}</Heading>
                <Text>Amount</Text>
                <Input
                  value={paymentAmount}
                  onChange={handleInputChange}
                >
                </Input>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Send Payment
                </Button>
                <Button colorScheme="red" onClick={handleModalClose}>Cancel</Button>
              </ModalFooter>
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
