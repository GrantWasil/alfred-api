import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Link,
  Divider,
  Box,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Footer() {
  const bg = useColorModeValue("rgb(255, 255, 266)", "rgb(26, 32, 44)");
  return (
    <Box position="fixed" bottom="0" w="100%" zIndex="2" as="footer" bg={bg}>
      <Divider />
      <Stack
        justifyContent="space-between"
        spacing={2}
        w="100%"
        p={8}
        align="center"
        direction={['column', 'row']}
      >
        <ColorToggle />
        <Link href="https://www.github.com/GrantWasil" isExternal>
          Grant Wasil
        </Link>
        <Text>Made with Love, and also Code</Text>
      </Stack>
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
