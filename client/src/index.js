import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Open Sans, serif"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={'system'} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
