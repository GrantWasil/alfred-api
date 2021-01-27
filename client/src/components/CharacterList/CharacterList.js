import React from 'react';
import { Box, Heading, List } from 'grommet';

function CharacterList() {
  return (
    <Box
      align="center"
      justify="start"
      flex
      fill="vertical"
      pad={'small'}
      textAlign="center"
      background={'light-3'}
    >
      <Heading>Cast List</Heading>
      <Heading level="3" alignSelf="center">
        Casino Staff
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="description"
        data={[
          { name: 'Sam Riley', description: 'the casino manager.' },
          { name: 'Jo Knowall', description: 'a croupier.' },
          { name: 'Felicity Phillips', description: 'a cabaret dancer.' },
          { name: 'Chris Rowan', description: 'a croupier.' },
        ]}
      />
      <Heading level="3" alignSelf="center">
        Locals
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="description"
        data={[
          { name: 'Ralph Anderson', description: 'local nightclub bouncer.' },
          {
            name: 'Pat Bullitt',
            description: 'ex-army, now runs a security firm.',
          },
          {
            name: 'Ashley Bunsen',
            description: 'a scientist, regular visitor to the casino.',
          },
          {
            name: 'Countess Alice de Ville',
            description: 'wealthy, beautiful and widowed.',
          },
          { name: 'Donovan Jones', description: 'a well-known Bohemian poet.' },
          {
            name: 'Dominique Renard',
            description: 'the owner of an international shipping business.',
          },
        ]}
      />
      <Heading level="3" alignSelf="center">
        Police
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="description"
        data={[
          {
            name: 'Sergeant Armand Blanc',
            description: 'a police detective assisting Inspector Leclou',
          },
          {
            name: 'Detective Natalie Bois',
            description: 'a police detective assisting Inspector Leclou',
          },
          {
            name: 'Inspector Freddie Leclou',
            description: 'an experienced police detective.',
          },
        ]}
      />
      <Heading level="3" alignSelf="center">
        Visitors
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="description"
        data={[
          {
            name: 'Jack Bland',
            description:
              "the name's Bland; Jack Bland. An international shipping operative.",
          },
          {
            name: 'Lord James T. Burke',
            description: 'a rich English playboy.',
          },
          {
            name: 'Lady Matilda Burke',
            description: 'younger sister of Lord James.',
          },
          {
            name: 'Andre Couvert',
            description: 'a tourist en route to Switzerland.',
          },
          {
            name: 'Eva Goodbody',
            description: 'a freelance reporter from New York.',
          },
          {
            name: 'Alex Kirk',
            description: 'a former racing driver and minor celebrity.',
          },
          {
            name: 'Selina Skye',
            description: 'a successful jewellery designer.',
          },
          {
            name: 'John Smith',
            description:
              'rich tourist rumored to be a millionaire lottery winner.',
          },
          { name: 'Anna Upanova', description: 'a wealthy lady of leisure.' },
          {
            name: 'Lucia Venditti',
            description: 'Italian tourist, here on honeymoon.',
          },
          {
            name: 'Valentino Venditti',
            description: 'Italian tourist, here on honeymoon.',
          },
          { name: 'Zara Zirconoff', description: 'a starlet.' },
        ]}
      />
      <Heading level="3" alignSelf="center">
        Film Crew
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="description"
        data={[
          { name: 'Drew Daniels', description: 'sound engineer.' },
          { name: 'Sabrina Devereux', description: 'assistant to George Neville.' },
          { name: 'George Neville', description: 'director of the film crew.' },
          { name: 'Sandy Stone', description: 'journalist and presenter.' },
          { name: 'Joss "Woody" Woodrow', description: 'camera operator.' },
        ]}
      />
    </Box>
  );
}

export default CharacterList;
