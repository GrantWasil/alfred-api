import React from 'react';
import {
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Search from '../Search/Search';
import AbilityPopup from '../AbilityPopup/AbilityPopup';

function Actions(props) {
  const { characterData, allCharacterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <AbilityPopup ability={a} />
            );
          })}
          <Heading size="l">Items</Heading>
          {characterData.items.map((i) => {
            return (
              <Button
                varient="ghost"
                value="item"
                rounded="md"
                onClick={onOpen}
                p={2}
                size="lg"
                maxH="100px"
              >
                <Flex>{i}</Flex>
              </Button>
            );
          })}
          <Search
            isOpen={isOpen}
            onClose={onClose}
            allCharacterData={allCharacterData}
            characterData={characterData}
          />
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default Actions;
