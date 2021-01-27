import React, { useState } from 'react';
import { Box } from 'grommet';
import { Router, navigate } from '@reach/router';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import CharacterList from '../CharacterList/CharacterList';
import MainHeader from '../MainHeader/MainHeader';
import EventInfo from '../EventInfo/EventInfo';
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
        navigate('/me');
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
          navigate('/me');
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
      <MainHeader characterData={characterData} onLogoutCharacter={handleLogoutCharacter}/>
      <Router>
        <Login default path="/login" onLoginCharacter={handleLoginCharacter} />
        <Create path="/create" onCreateCharacter={handleCreateCharacter} />
        <EventInfo path="/event" />
        <CharacterList path="/list" />
        <Character
          path="/me"
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
