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

function Actions(props) {
  const { characterData, allCharacterData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing={3} justify="center" textAlign="center">
      {characterData.name ? (
        <>
          <Heading>Actions</Heading>
          <Stack spacing={1}>
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
              <Button varient="ghost" value="ability" onClick={onOpen}>
                <Flex>
                  <Flex direction="column">
                    <Heading size="m">{a.name}</Heading>
                    <Text>{a.text}</Text>
                  </Flex>
                  <Text pl={1}>Uses: {a.uses}</Text>
                </Flex>
              </Button>
            );
          })}
          <Heading size="l">Items</Heading>
          { characterData.items.map((i) => {
            return (
              <Button varient="ghost" value="item" onClick={onOpen}>
                <Flex>{i.text}</Flex>
              </Button>
            )
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
