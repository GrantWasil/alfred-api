import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import Main from '../Main/Main';

function App() {
  const theme = {
    global: {
      colors: {
        brand: '#264653',
        'focus': '#a8dadc',
        'accent-1': '#2a9d8f',
        'accent-2': '#e9c46a',
        'accent-3': '#f4a261',
        'accent-4': '#e76f51',
      },
    },
    font: {
      family: 'Halant',
      size: '18px',
      height: '20px',
    },
  };
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <Main />
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
