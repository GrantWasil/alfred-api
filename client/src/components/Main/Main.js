import React, { useState } from 'react';
import { Box } from 'grommet';
import { Route, useHistory, Redirect, Switch } from 'react-router-dom';
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

  return (
    <Box flex fill="vertical" align="center" background={'light-2'}>
      <Switch>
        <Route path="/login">
          <Login onLoginCharacter={handleLoginCharacter} />
        </Route>
        <Route exact path="/create">
          <Create onCreateCharacter={handleCreateCharacter} />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={isLoggedIn}
          component={Character}
          characterData={characterData}
        />
        <Route>
          {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Box>
  );
}

export default Main;
