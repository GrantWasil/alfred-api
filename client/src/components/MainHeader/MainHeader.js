import React from 'react';
import { Header, Button, Nav } from 'grommet';
import { Link } from '@reach/router';
import './MainHeader.css';

function MainHeader(props) {
  const { characterData, onLogoutCharacter } = props;
  return (
    <Header
      fill="horizontal"
      background={'light-5'}
      pad="small"
      align="center"
      justify="center"
    >
      {characterData ? (
        <Nav direction="row" align="center">
          <Link className="header__link" to="/me">
            Character
          </Link>
          {characterData.keyword === 'testing' ? (
            <Link className="header__link" to="/create">
              Create
            </Link>
          ) : (
            <></>
          )}
          <Button label="Logout" onClick={onLogoutCharacter} />
        </Nav>
      ) : (
        <> </>
      )}
    </Header>
  );
}

export default MainHeader;
