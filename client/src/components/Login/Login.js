import React, { useState } from 'react';
import { Box, Button, TextInput, Heading, Form } from 'grommet';
import './Login.css';

function Login(props) {
  const [formData, changeFormData] = useState({});
  const { onLoginChracter } = props;
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
      <Form
        value={formData}
        onChange={(nextValue) => changeFormData(nextValue)}
        onReset={() => changeFormData({})}
        onSubmit={(formData) => {
          const data = formData.value;
          console.log(data);
          onLoginChracter(data)
        }}
      >
        <TextInput placeholder="Keyword" textAlign="center" />
        <Button primary label="Login" type="submit" margin={{ top: 'small' }} />
      </Form>
    </Box>
  );
}

export default Login;
