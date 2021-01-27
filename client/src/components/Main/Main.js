import React, { useState } from 'react';
import { Box } from 'grommet';
import { Router, navigate } from '@reach/router';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/Api';
import './Main.css';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterData, setCharacterData] = useState({});

  React.useEffect(() => {
    api.getCharacterData().then((res) => {
      console.log(res);
      if (res.character) {
        setCharacterData(res.character);
        setIsLoggedIn(true);
        navigate('/');
      }
    });
  }, []);

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
        api.getCharacterData().then((res) => {
          setCharacterData(res.character);
          setIsLoggedIn(true);
          navigate('/');
        });
      }
    });
  }

  function handleLogoutCharacter() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCharacterData({});
    navigate('/login');
  }

  return (
    <Box flex fill="vertical" align="center" background={'light-3'}>
      <Router>
        <Login path="/login" onLoginCharacter={handleLoginCharacter} />
        <Create path="create" onCreateCharacter={handleCreateCharacter} />
        <ProtectedRoute
          path="/"
          loggedIn={isLoggedIn}
          component={Character}
          characterData={characterData}
          onLogoutCharacter={handleLogoutCharacter}
        />
      </Router>
    </Box>
  );
}

export default Main;
