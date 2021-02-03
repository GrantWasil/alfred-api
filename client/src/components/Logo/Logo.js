import React from 'react';
import { Flex, Heading, Icon } from '@chakra-ui/react';

const HeaderIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path d="M16.667 43.33C16.667 69.104 37.559 90 63.333 90v-6.667c-22.093 0-40-17.91-40-40.003h-6.666z" />
    <path d="M63.333 16.667c-14.729 0-26.666 11.94-26.666 26.664C36.667 58.06 48.604 70 63.333 70v6.667C44.922 76.667 30 61.741 30 43.33 30 24.922 44.922 10 63.333 10v6.667z" />
    <path d="M63.333 43.333v20c-11.048 0-20-8.955-20-20.003 0-11.045 8.952-19.997 20-19.997 11.049 0 20 8.952 20 19.997l-20 .003z" />
  </svg>
);

function Logo(props) {
  return (
    <Flex {...props}>
      <Icon as={HeaderIcon} h={12} w={12} fill="currentcolor"/>
      <Heading size="lg">Alfred</Heading>
    </Flex>
  );
}

export default Logo;
