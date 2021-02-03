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
                  Goals To Complete
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {characterData.goals.map((g) => {
                  return (
                    <Flex>
                      <Text pb={3}>
                        <Text fontStyle="italic">{g.name}</Text>
                        {g.text}
                      </Text>
                    </Flex>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Starting tips
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {characterData.tips.map((t) => {
                  return <Text pb={3}>{t}</Text>;
                })}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Your relationships
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {characterData.others.map((o) => {
                  return (
                    <Flex>
                      <Text pb={3}>
                        <Text fontStyle="italic">{o.name}</Text>
                        {o.text}
                      </Text>
                    </Flex>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Your bio
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {characterData.bio.map((p) => {
                  return <Text pb={3}>{p}</Text>;
                })}
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
