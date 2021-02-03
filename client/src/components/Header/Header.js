import React from 'react';
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';

import Logo from '../Logo/Logo';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { characterData, onLogoutCharacter, gamemode } = props;
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavBarContainer {...props}>
      <Logo direction="row" align="center" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks
        isOpen={isOpen}
        characterData={characterData}
        onLogoutCharacter={onLogoutCharacter}
        gamemode={gamemode}
        closeMenu={closeMenu}
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

const MenuItem = ({ children, isLast, to = '/', closeMenu, ...rest }) => {
  return (
    <Link as={ReachLink} to={to} onClick={closeMenu}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = (props) => {
  const {
    isOpen,
    characterData,
    onLogoutCharacter,
    gamemode,
    closeMenu,
  } = props;
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
          {gamemode === 1 ? (
            <>
              <MenuItem to="/me" closeMenu={closeMenu}>
                Your Character
              </MenuItem>
              <MenuItem to="/event" closeMenu={closeMenu}>
                Event Info
              </MenuItem>
              <MenuItem to="/list" closeMenu={closeMenu}>
                Guest List{' '}
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem to="/me" closeMenu={closeMenu}>
                Event Info
              </MenuItem>
              <MenuItem to="/actions" closeMenu={closeMenu}>
                Actions
              </MenuItem>
            </>
          )}
          {characterData.keyword === 'testing' ? (
            <>
              <MenuItem to="/create" closeMenu={closeMenu}>
                Create{' '}
              </MenuItem>
              <MenuItem to="/admin" closeMenu={closeMenu}>
                Admin
              </MenuItem>
              <MenuItem to="/actions" closeMenu={closeMenu}>
                Actions
              </MenuItem>
              <MenuItem to="/bio" closeMenu={closeMenu}>
                Bio
              </MenuItem>
              <Text display="block" closeMenu={closeMenu}>
                Stage: {gamemode}
              </Text>
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
