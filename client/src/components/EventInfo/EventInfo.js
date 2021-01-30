import React from 'react';
import { Flex, Heading, Text, Spacer } from '@chakra-ui/react';

function EventInfo() {
  return (
    <Flex
      justifyContent="center"
      alignContent="space-between"
      textAlign="center"
      flexDirection="column"
      minH="70vh"
    >
      <Heading>Casino Fatale</Heading>
      <Heading as="h4" size="l" alignSelf="start">
        The Setting
      </Heading>
      <Spacer />
      <Text as="p">
        The banks of the River Seine in Paris; a dark night, and glittering
        casino lights. The wealthy of Paris, the talented, the brilliant... and
        a few people who are frankly just hangers-on... are descending on the
        Hotel D’Etoile to take part in a charity auction for the local
        orphanage, and you are about to join them!
      </Text>
      <Spacer />
      <Text as="p">
        Money will change hands, reputations will be made and lost, and intrigue
        will thicken, as wealth, crime and politics come together to play...
        Welcome to Casino Fatale!
      </Text>
      <Spacer />
      <Text as="p">
        “You are warmly invited to come and spend lots of money in the
        name of charity at Hotel D’Etoile. We are holding a charity auction for
        our local orphanage and will be auctioning jewellery and the services of
        several local characters. Any further donations please contact the
        casino before the event.”
      </Text>
    </Flex>
  );
}

export default EventInfo;
