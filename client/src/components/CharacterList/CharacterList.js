import React from 'react';
import { Heading } from 'grommet';
import { Box, List, ListItem } from '@chakra-ui/react';

function CharacterList() {
  return (
    <Box>
      <Heading level="3" alignSelf="center">
        Casino Staff
      </Heading>
      <List>
        <ListItem>Sam Riley: The casino manager.</ListItem>
        <ListItem>Jo Knowall: A croupier.</ListItem>
        <ListItem>Chris Rowan: A croupier.</ListItem>
        <ListItem>Felicity Phillips: A cabaret dancer.</ListItem>
      </List>
      <Heading level="3" alignSelf="center">
        Locals
      </Heading>
      <List>
        <ListItem>Ralph Anderson: Local nightclub bouncer.</ListItem>
        <ListItem>Pat Bullitt: Ex-army, now runs a security firm.</ListItem>
        <ListItem>
          Ashley Bunsen: A scientist, regular visitor to the casino.
        </ListItem>
        <ListItem>
          Countess Alice de Ville: Wealthy, beautiful and widowed.
        </ListItem>
        <ListItem>Donovan Jones: A well-known Bohemian poet.</ListItem>
        <ListItem>
          Dominique Renard: The owner of an international shipping business.
        </ListItem>
      </List>
      <Heading level="3" alignSelf="center">
        Police
      </Heading>
      <List>
        <ListItem>
          Inspector Freddie Leclou: An experienced police detective
        </ListItem>
        <ListItem>
          Sergeant Armand Blanc: A police detective assisting Inspector Leclou
        </ListItem>
        <ListItem>
          Detective Natalie Bois: A police detective assisting Inspector Leclou
        </ListItem>
      </List>
      <Heading level="3" alignSelf="center">
        Visitors
      </Heading>
      <List>
        <ListItem>
          Jack Bland: The name's Bland; Jack Bland. An international shipping
          operative.
        </ListItem>
        <ListItem>Lord James T. Burke: A rich English playboy.</ListItem>
        <ListItem>Lady Matilda Burke: Younger sister of Lord James.</ListItem>
        <ListItem>Andre Couvert: A tourist en route to Switzerland.</ListItem>
        <ListItem>Eva Goodbody: A freelance reporter from New York.</ListItem>
        <ListItem>
          Alex Kirk: A former racing driver and minor celebrity.
        </ListItem>
        <ListItem>Selina Skye: A successful jewellery designer.</ListItem>
        <ListItem>
          John Smith: A rich tourist rumored to be a millionaire lottery winner.
        </ListItem>
        <ListItem>Anna Upanova: A wealthy lady of leisure.</ListItem>
        <ListItem>Zara Zirconoff: A starlet.</ListItem>
      </List>
      <Heading level="3" alignSelf="center">
        Film Crew
      </Heading>
      <List>
        <ListItem>George Neville: Director of the film crew.</ListItem>
        <ListItem>Drew Daniels: Sound engineer.</ListItem>
        <ListItem>Sabrina Devereux: Assistant to George Neville.</ListItem>
        <ListItem>Sandy Stone: Journalist and presenter.</ListItem>
        <ListItem>Joss "Woody" Woodrow: Camera operator.</ListItem>
      </List>
    </Box>
  );
}

export default CharacterList;
