import React, { useState } from 'react';
import { Box, Button, TextInput, Heading, Keyboard } from 'grommet';
import './Login.css';

function Login(props) {
  const [value, setValue] = useState('');
  const { onLoginCharacter } = props;

  function handleValueChange(e) {
    setValue(e.target.value.toLowerCase());
  }

  function handleClick() {
    setValue(value.toLowerCase());
    onLoginCharacter(value);
    setValue('');
  }

  return (
    <Box
      tag="section"
      align="center"
      justify="center"
      animation={{ type: 'fadeIn', duration: 2000 }}
      pad={{ top: 'xlarge' }}
      style={{ zIndex: '1' }}
      width="medium"
    >
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
      <Button
        primary
        label="Login"
        type="submit"
        margin={{ top: 'small' }}
        onClick={handleClick}
      />
    </Box>
  );
}

export default Login;
