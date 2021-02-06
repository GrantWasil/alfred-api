import React from 'react';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

function News() {
  return (
    <Flex
      justifyContent="center"
      alignContent="space-between"
      textAlign="center"
      flexDirection="column"
      h="100%"
    >
      <Stack padding={4}>
        <Stack padding={3}>
          <Heading as="h1">Casino Fatale</Heading>
          <Heading size="3xl">LET THE GOOD TIMES ROLL!</Heading>
          <Heading size="md">
            Hotel D’Etoile is having its best year ever. To celebrate, it is
            hosting a charity auction in aid of the local orphanage.
          </Heading>
          <Heading size="md">
            If you haven’t already received your invitation then you won’t be
            going, as the charity auction is strictly an invitation-only affair.
          </Heading>
        </Stack>
        <Stack padding={2}>
          <Heading size="sm">Eligible Bachelor Meets ‘It’ Girl</Heading>
          <Text>
            Alex Kirk has been crowned “Most Eligible Bachelor in Paris”. He
            already has ladies flocking round him: how on earth will he fit his
            ego through the door now?
          </Text>
          <Text>
            And the latest ‘it’ girl in town is Anna Upanova. She has already
            been invited to all the best parties in town, and is auctioning her
            services at the charity auction at Hotel D’Etoile, along with other
            local celebrities. Calm down, boys: she’s auctioning her company for
            a drink at the bar, and that is all!
          </Text>
        </Stack>
        <Stack padding={2}>
          <Heading size="sm">Success for Donovan Jones</Heading>
          <Text>
            The renowned local poet Donovan Jones has reaped the plaudits for
            his latest book My Town. It has sold over 30,000 copies, and has
            headed the bestseller lists for weeks.
          </Text>
        </Stack>
        <Stack padding={2}>
          <Heading size="sm">X Marks the Spot</Heading>
          <Text>
            Persistent underworld rumours suggest that Mr X, the notorious
            master criminal who once kidnapped the entire island of Madeira, may
            be currently resident in our fair city of Paris. Please keep an eye
            open for anyone who looks particularly criminal, and report them to
            your trusted police or to Interpol!
          </Text>
        </Stack>
        <Stack padding={2}>
          <Heading size="sm">The Black Panther Strikes Again</Heading>
          <Text>
            Another daring jewel snatch has occurred in our city! A large
            emerald bracelet was stolen from a Paris jeweller yesterday. It is
            reported to be worth over 200,000 Euros.
          </Text>
          <Text>
            This is the latest in a series of jewel thefts by the notorious
            “Black Panther”: most recently, a diamond ring lifted from a leading
            Parisian jeweller last week. Police are refusing to comment.
          </Text>
        </Stack>
        <Stack padding={2}>
          <Heading size="sm">Award for Nuclear Scientist</Heading>
          <Text>
            Professor James Havelott, a British nuclear physicist, has been
            posthumously awarded the Paris Medal for achievements in science.
            Professor Havelott worked at the Centre for Advanced Nuclear Studies
            on the outskirts of Paris for nearly 15 years, until his murder
            earlier this month (his wife was also shot dead). His daughter
            Melissa accepted the award on his behalf.
          </Text>
          <Text>
            Professor Havelott’s assistant Ashley Bunsen said “There is no-one
            in this country who knew more about nuclear physics than the
            Professor: he is sorely missed. He really deserved this award, and I
            can’t believe he isn’t with us to accept the award in person.”
            Police still have no leads in the double murder.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default News;
