import React from 'react';
import { Flex, Heading, Icon } from '@chakra-ui/react';

const HeaderIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path d="M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"></path>
    <path d="M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z"></path>
    <path d="M63.333,43.333v20c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997  L63.333,43.333z"></path>
  </svg>
);

function Logo(props) {
  return (
    <Flex {...props}>
      <Icon as={HeaderIcon} h={12} w={12} />
      <Heading size="lg">Alfred</Heading>
    </Flex>
  );
}

export default Logo;
