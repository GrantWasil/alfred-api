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
    <Box position="fixed" bottom="0" w="100%" zIndex="2" as="footer">
      <Divider />
      <Flex justifyContent="space-between" w="100%" p={8} align="center" direction={['column', 'row']}>
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
