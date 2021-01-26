import React, { useState } from 'react';
import { Box } from 'grommet';
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Character from '../Character/Character';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/Api';
import './Main.css';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterData, setCharacterData] = useState({});
  const history = useHistory();

  React.useEffect(() => {
    api.getCharacterData().then((res) => {
      console.log(res);
      if (res.character) {
        setCharacterData(res.character);
        setIsLoggedIn(true);
        history.push('/');
      }
    });
  }, [history]);

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
          history.push('/');
        });
      }
    });
  }

  function handleLogoutCharacter() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCharacterData({});
    history.push('/login');
  }

  return (
    <Box flex fill="vertical" align="center" background={'light-2'}>
      <Switch>
        <Route path="/login">
          <Login onLoginCharacter={handleLoginCharacter} />
        </Route>
        <Route path="/create">
          <Create onCreateCharacter={handleCreateCharacter} />
        </Route>
        <ProtectedRoute
          exact path="/"
          loggedIn={isLoggedIn}
          component={Character}
          characterData={characterData}
          onLogoutCharacter={handleLogoutCharacter}
        />
        <Route>
          { isLoggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Box>
  );
}

export default Main;
