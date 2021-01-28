import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={'system'} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
