import React, { useState } from 'react';
import { Button, TextInput, Heading, Keyboard } from 'grommet';
import './Login.css';
import { Center } from '@chakra-ui/react';

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
    <Center>
      <Heading level="2" textAlign="center">
        Please enter your keyword
      </Heading>
      <Keyboard onEnter={handleClick}>
        <TextInput
          placeholder="Keyword"
          textAlign="center"
          value={value}
          onChange={handleValueChange}
        />
      </Keyboard>
      <Button primary label="Login" margin="medium" type="submit" onClick={handleClick} />
    </Center>
  );
}

export default Login;
