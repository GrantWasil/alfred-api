import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import io from 'socket.io-client';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../Header/Header';
import EventInfo from '../EventInfo/EventInfo';
import Admin from '../Admin/Admin';
import Search from '../Search/Search';
import api from '../../utils/Api';
import './Main.css';
import { Box, Container } from '@chakra-ui/react';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterData, setCharacterData] = useState({});
  const [socketStatus, setSocketStatus] = useState(false);
  const [gamemode, setGamemode] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const socket = io();

  React.useEffect(() => {
    api.getCharacterData().then((res) => {
      console.log(res);
      if (res.character) {
        setCharacterData(res.character);
        setIsLoggedIn(true);
        navigate('/me');
      }
    });
    api.getAllCharacters().then((res) => {
      console.log(res);
    });
  }, []);

  React.useEffect(() => {
    socket.on('status', (data) => {
      setSocketStatus(data);
    });
    socket.on('gameMode', (data) => {
      setGamemode(data);
    })
    socket.on('payment', (data) => {
      if (data.receiver !== characterData.name) {
        return;
      }
      console.log('You got money!');
    })
    socket.on('ability', (data) => {
      if (data.receiver !== characterData.name) {
        return;
      }
      console.log('You have been abilitied!')
    })
  }, [characterData, socket]);

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

  function handleUpdateGamemode(data) {
    socket.emit('gameMode', data);
  }

  return (
    <Box justifyContent="center">
      <Header
        characterData={characterData}
        onLogoutCharacter={handleLogoutCharacter}
        socketStatus={socketStatus}
        gamemode={gamemode}
      />
      <Container centerContent>
        <Router>
          <Login
            default
            path="/login"
            onLoginCharacter={handleLoginCharacter}
          />
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
          <Admin
            path="/admin"
            onUpdateGamemode={handleUpdateGamemode}
          />
        </Router>
      </Container>
      <Search isOpen={isSearchOpen} setSearch={setIsSearchOpen} />
    </Box>
  );
}

export default Main;
