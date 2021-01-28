import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import io from 'socket.io-client';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../Header/Header';
import EventInfo from '../EventInfo/EventInfo';
import api from '../../utils/Api';
import './Main.css';
import { Box } from '@chakra-ui/react';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterData, setCharacterData] = useState({});
  const [socketStatus, setSocketStatus] = useState(false);

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

  React.useEffect(() => {
    const socket = io();
    socket.on('status', data => {
      setSocketStatus(data);
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
    <Box>
      <Header characterData={characterData} onLogoutCharacter={handleLogoutCharacter} socketStatus={socketStatus}/>
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
