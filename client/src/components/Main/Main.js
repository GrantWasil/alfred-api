import React, { useState } from 'react';
import { Box } from 'grommet';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import api from '../../utils/Api';
import './Main.css';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleCreateCharacter(data) {
    api
      .createNewCharacter(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  function handleLoginCharacter(keyword) {
    api.loginUser(keyword).then((res) => {
      if (res.token) {
        setIsLoggedIn(true);
      }
    });
  }

  return (
    <Box flex fill="vertical" align="center" background={'light-2'}>
      <Route exact path="/">
        {isLoggedIn ? (
          <Character />
        ) : (
          <Login onLoginCharacter={handleLoginCharacter} />
        )}
      </Route>
      <Route path="/create">
        <Create onCreateCharacter={handleCreateCharacter} />
      </Route>
    </Box>
  );
}

export default Main;
