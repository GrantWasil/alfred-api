import React from 'react';
import { useColorMode, Button, Flex, Text, Link } from '@chakra-ui/react';
import { AiTwotoneHeart } from 'react-icons';

function Footer() {
  return (
    <Flex as="footer" justifyContent="space-between" w="100%" p={8}>
      <Text>Made with <AiTwotoneHeart />... and also Code</Text>
      <ColorToggle />
      <Link href="https://www.github.com/GrantWasil" isExternal>
        Grant Wasil
      </Link>
    </Flex>
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
