import React from 'react';
import { Header, Button, Nav, Anchor } from 'grommet';
import { Link } from '@reach/router';

function MainHeader(props) {
  const { characterData, onLogoutCharacter } = props;
  return (
    <Header
      fill="horizontal"
      background={'light-5'}
      pad='small'
    >
      <Nav direction="row">
        <Link to="/me">
          Character
        </Link>
        {characterData.keyword === 'testing' ? (
          <Link to="/create">
            Create
          </Link>
        ) : (
          <></>
        )}
        <Button label="Logout" onClick={onLogoutCharacter} />
      </Nav>
    </Header>
  );
}

export default MainHeader;
