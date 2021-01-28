import React from 'react';
import { Header, Button, Nav, Anchor } from 'grommet';
import { Link } from '@reach/router';
import './MainHeader.css';

function MainHeader(props) {
  const { characterData, onLogoutCharacter, socketStatus } = props;
  return (
    <Header
      fill="horizontal"
      background={'light-5'}
      pad="small"
      align="center"
      justify="center"
    >
      {characterData.name ? (
        <Nav direction="row" align="center">
          <Link className="header__link" to="/me">
            Character
          </Link>
          <Link className="header__link" to="/event">
            Event Info
          </Link>
          <Link className="header__link" to="/list">
            Character List
          </Link>
          {characterData.keyword === 'testing' ? (
            <Link className="header__link" to="/create">
              Create
            </Link>
          ) : (
            <></>
          )}
          <Button label="Logout" onClick={onLogoutCharacter} />
          {socketStatus ? <Anchor>Online</Anchor> : <Anchor>Offline</Anchor>}
        </Nav>
      ) : (
        <> </>
      )}
    </Header>
  );
}

export default MainHeader;
