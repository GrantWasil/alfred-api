import React from 'react';
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';

import Logo from '../Logo/Logo';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { characterData, onLogoutCharacter, gamemode } = props;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo direction="row" align="center" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks
        isOpen={isOpen}
        characterData={characterData}
        onLogoutCharacter={onLogoutCharacter}
        gamemode={gamemode}
      />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link as={ReachLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = (props) => {
  const { isOpen, characterData, onLogoutCharacter, gamemode } = props;
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      {characterData.name ? (
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/me">Your Character</MenuItem>
          <MenuItem to="/event">Event Info</MenuItem>
          <MenuItem to="/list">Guest List </MenuItem>
          {characterData.keyword === 'testing' ? (
            <>
              <MenuItem to="/create">Create </MenuItem>
              <Text display="block">Stage: {gamemode}</Text>
            </>
          ) : (
            <> </>
          )}
          <MenuItem to="/login" isLast>
            <Button onClick={onLogoutCharacter} size="sm" rounded="md">
              Logout
            </Button>
          </MenuItem>
        </Stack>
      ) : (
        <> </>
      )}
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;
