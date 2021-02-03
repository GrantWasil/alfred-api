import React from 'react';
import {
  useColorMode,
  Button,
  Flex,
  Text,
  Link,
  Divider,
  Box,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Box position="absolute" bottom="0">
      <Divider />
      <Flex
        as="footer"
        justifyContent="space-between"
        w="100%"
        p={8}
        align="center"
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
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};

export default Footer;
