import React from 'react';

import {
  Stack,
  Box,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Bio(props) {
  const { characterData } = props;
  return (
    <>
      {characterData.name ? (
        <Stack spacing={3} textAlign="center">
          <Heading>{characterData.name}</Heading>
          <Flex>
            <Heading size="l">Your secret: </Heading>
            <Text pl={1}>{characterData.secret}</Text>
          </Flex>
          <Flex>
            <Heading size="l">Your clue: </Heading>
            <Text pl={1}>{characterData.clue}</Text>
          </Flex>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Starting tips
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack spacing={3}>
                  {characterData.tips.map((t) => {
                    return <Text>{t}</Text>;
                  })}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Your bio
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack spacing={3}>
                  {characterData.bio.map((p) => {
                    return <Text>{p}</Text>;
                  })}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Bio;
