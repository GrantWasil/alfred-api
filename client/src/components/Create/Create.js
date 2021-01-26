import React, { useState } from 'react';
import { Box, Form, FormField, TextInput, TextArea, Button } from 'grommet';
import './Create.css';

function Create(props) {
  const {onCreateCharacter}= props;
  const [formData, changeFormData] = useState({});
  return (
    <Box pad={{ top: 'xlarge' }}>
      <Form
        value={formData}
        onChange={(nextValue) => changeFormData(nextValue)}
        onReset={() => changeFormData({})}
        onSubmit={(formData) => {
          const data = formData.value;
          console.log(data);
          onCreateCharacter({
            keyword: data.keyword,
            name: data.name,
            traits: data.traits,
            preview: data.preview,
          })
        }}
      >
        <FormField name="keyword" label="Keyword" htmlFor="text-keyword-id">
          <TextInput id="text-keyword-id" name="keyword" />
        </FormField>
        <FormField name="name" label="Name" htmlFor="text-name-id">
          <TextInput id="text-name-id" name="name" />
        </FormField>
        <FormField name="traits" label="Traits" htmlFor="text-traits-id">
          <TextInput id="text-traits-id" name="traits" />
        </FormField>
        <FormField name="preview" label="Preview" htmlFor="text-preview-id">
          <TextArea id="text-preview-id" name="preview" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
}

export default Create;
