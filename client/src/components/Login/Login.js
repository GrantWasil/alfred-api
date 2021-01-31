import React, { useState } from 'react';
import { Keyboard } from 'grommet';
import './Login.css';
import { Flex, Heading, Input, Button} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Login(props) {
  const [value, setValue] = useState('');
  const { onLoginCharacter } = props;

  function handleValueChange(e) {
    setValue(e.target.value.toLowerCase());
  }

  function handleClick() {
    onLoginCharacter(value);
    setValue('');
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h2" size="xlg">
        Please enter your keyword
      </Heading>
      <Keyboard onEnter={handleClick}>
        <Input
          placeholder="Keyword"
          textAlign="center"
          value={value}
          onChange={handleValueChange}
          my={3}
        />
      </Keyboard>
      <Button onClick={handleClick} colorScheme="green" rightIcon={<ArrowForwardIcon />}>Login</Button>
    </Flex>
  );
}

export default Login;
