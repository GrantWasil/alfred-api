import React, { useState } from 'react';
import { Box, Button, TextInput, Heading, Form } from 'grommet';
import './Login.css';

function Login(props) {
  const [value, setValue] = useState('');
  const { onLoginChracter } = props;

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    onLoginChracter(value);
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
      <TextInput
        placeholder="Keyword"
        textAlign="center"
        value={value}
        onChange={handleValueChange}
      />
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
