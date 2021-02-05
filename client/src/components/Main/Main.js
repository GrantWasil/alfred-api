import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import io from 'socket.io-client';
import Login from '../Login/Login';
import Bio from '../Bio/Bio';
import Create from '../Create/Create';
import Character from '../Character/Character';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../Header/Header';
import EventInfo from '../EventInfo/EventInfo';
import Admin from '../Admin/Admin';
import Actions from '../Actions/Actions';
import Footer from '../Footer/Footer';
import api from '../../utils/Api';
import './Main.css';
import { Box, Container, useToast } from '@chakra-ui/react';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterData, setCharacterData] = useState({});
  const [allCharacterData, setAllCharacterData] = useState([]);
  const [socketStatus, setSocketStatus] = useState(false);
  const [gamemode, setGamemode] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const socket = io();
  const toast = useToast();

  React.useEffect(() => {
    api
      .getCharacterData()
      .then((res) => {
        console.log(res);
        if (res.character) {
          setCharacterData(res.character);
          setIsLoggedIn(true);
          navigate('/me');
        }
      })
      .catch(() => navigate('/login'));
    api.getAllCharacters().then((res) => {
      setAllCharacterData(res.characters);
    });
  }, [])

  React.useEffect(() => {
    socket.on('status', (data) => {
      setSocketStatus(data);
    });
    socket.on('gameMode', (data) => {
      setGamemode(data);
    });
    socket.on('payment', (data) => handleSocketPayment(data));

    return () => socket.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterData, socket]);

  function handleSocketPayment(data) {
    console.log(data.id)
    console.log(characterData);
    console.log(characterData._id);
    console.log(characterData.id === data.id);
    if (data.id !== characterData._id) {
      return;
    } else {
      toast({
        title: "Money Recieved",
        description: `${data.sender} has sent you ${data.amount}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      api.getCharacterData().then((res) => {
        setCharacterData(res.character);
      });
    }
  }

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

  function handlePayMoney(amount, id) {
    api.sendMoney(amount, id)
      .then((res) => {
        if (res.name) {
          const sender = res.name;
          toast({
            title: "Money sent",
            description: "Your balance has been updated",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
          socket.emit('payment', { amount, sender, id})
          api.getCharacterData().then((res) => {
            setCharacterData(res.character);
          });
        }
      })
  }

  return (
    <Box justifyContent="center" h="100%">
      <Header
        characterData={characterData}
        onLogoutCharacter={handleLogoutCharacter}
        socketStatus={socketStatus}
        gamemode={gamemode}
      />
      <Container centerContent maxw="xl" pb={["160px", "120px"]} height="100%">
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
          <Admin path="/admin" onUpdateGamemode={handleUpdateGamemode} />
          <Actions
            path="/actions"
            setSearch={setIsSearchOpen}
            characterData={characterData}
            allCharacterData={allCharacterData}
            onPayMoney={handlePayMoney}
          />
          <Bio path="/bio" characterData={characterData} />
        </Router>
      </Container>
      <Footer />
    </Box>
  );
}

export default Main;
