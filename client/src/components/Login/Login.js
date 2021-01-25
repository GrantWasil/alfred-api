import React from 'react';
import { Box, Button, TextInput, Heading } from 'grommet';
import './Login.css';

function Login() {
  return (
    <Box
      tag="section"
      align="center"
      justify="center"
      animation={{ type: 'fadeIn', duration: 2000 }}
      pad={{top: 'xlarge'}}
      style={{ zIndex: '1' }}
      width="medium"
    >
      <Heading
        level='2'
        textAlign="center"
      >
        Please enter your keyword
      </Heading>
      <TextInput
        placeholder="Keyword"
        textAlign="center"
      />
      <Button
        primary
        label="Login"
        type="submit"
        margin={{top: 'small'}}

      />
    </Box>
  );
}

export default Login;
