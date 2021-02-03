import React, { useState } from 'react';
import { Input, Button,  Box, Stack } from '@chakra-ui/react';
import './Create.css';

function Create(props) {
  const { onCreateCharacter } = props;
  const [keyword, setKeyword] = useState('');
  const [name, setName] = useState('');
  const [traits, setTraits] = useState('');
  const [preview, setPreview] = useState('');

  function onKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onTraitsChange(e) {
    setTraits(e.target.value);
  }

  function onPreviewChange(e) {
    setPreview(e.target.value);
  }

  function onReset() {
    setKeyword("");
    setName("");
    setTraits("");
    setPreview("");
  }

  function onSubmit() {
    if (!keyword || !name || !traits || !preview) {
      return;
    }
    const data = {
      keyword,
      name,
      traits,
      preview
    }
    onCreateCharacter(data)
    onReset();
  }

  return (
    <Stack spacing={3}>
      <Input placeholder="keyword" value={keyword} onChange={onKeywordChange} />
      <Input placeholder="name" value={name} onChange={onNameChange} />
      <Input placeholder="traits" value={traits} onChange={onTraitsChange} />
      <Input placeholder="preview" value={preview} onChange={onPreviewChange} />
      <Box direction="row" gap="medium">
        <Button rounded="md" type="submit" primary label="Submit" colorScheme="teal" onClick={onSubmit}>Submit</Button>
        <Button rounded="md" type="reset" label="Reset" colorScheme="pink" onClick={onReset}>Reset</Button>
      </Box>
    </Stack>
  );
}

export default Create;
