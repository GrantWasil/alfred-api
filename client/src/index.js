import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={'system'} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
