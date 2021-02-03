import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Button,
  Flex,
  Text,
  Link,
  Divider,
  Box,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Footer() {
  const bg = useColorModeValue("rgb(26, 32, 44)", "rgb(255, 255, 266");
  return (
    <Box position="fixed" bottom="0" w="100%" zIndex="2" as="footer" bg={bg}>
      <Divider />
      <Flex
        justifyContent="space-between"
        w="100%"
        p={8}
        align="center"
        direction={['column', 'row']}
      >
        <Text>Made with Love, and also Code</Text>
        <ColorToggle />
        <Link href="https://www.github.com/GrantWasil" isExternal>
          Grant Wasil's Github
        </Link>
      </Flex>
    </Box>
  );
}

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button size="sm" rounded="md" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default Footer;
