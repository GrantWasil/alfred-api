import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Flex, Box, Icon, Button, Text } from '@chakra-ui/react';
import { CloseIcon, MenuIcon } from '@chakra-ui/icons';
import './Header.css';

const HeaderIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path d="M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"></path>
    <path d="M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z"></path>
    <path d="M63.333,43.333v20c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997  L63.333,43.333z"></path>
  </svg>
);

const MenuItems = (props) => {
  const { children, isLast, to = '/', ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

function Header(props) {
  const [ show, setShow ] = useState(false);
  const { characterData, onLogoutCharacter, socketStatus } = props;
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Icon as={HeaderIcon} />
      </Flex>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      ></Box>
      {characterData.name ? (
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {socketStatus ? <p>Online</p> : <p>Offline</p>}
          <MenuItems to="/me">Your Character</MenuItems>
          <MenuItems to="/event">Event Info </MenuItems>
          <MenuItems to="/list">Guest List </MenuItems>
          {characterData.keyword === 'testing' ? (
            <MenuItems className="header__link" to="/create">
              Create
            </MenuItems>
          ) : (
            <></>
          )}
          <MenuItems to="/signup" isLast>
            <Button
              onClick={onLogoutCharacter}
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      ) : (
        <> </>
      )}
    </Flex>
  );
}

export default Header;
