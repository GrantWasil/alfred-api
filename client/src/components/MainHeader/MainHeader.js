import React from 'react';
import { Header, Button, Nav } from 'grommet';
import { Link } from '@reach/router';

function MainHeader(props) {
  const { characterData, onLogoutCharacter } = props;
  return (
    <Header>
      <Nav direction="row">
        <Button label="Character">
          <Link to="/me" />
        </Button>
        {characterData.keyword === 'testing' ? (
          <Button label="create">
            <Link to="/testing" />
          </Button>
        ) : (
          <></>
        )}
        <Button label="Logout" onClick={onLogoutCharacter} />
      </Nav>
    </Header>
  );
}

export default MainHeader;
