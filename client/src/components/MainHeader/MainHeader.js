import React from 'react';
import { Header, Button, Nav, Anchor } from 'grommet';
import { Link } from '@reach/router';

function MainHeader(props) {
  const { characterData, onLogoutCharacter } = props;
  return (
    <Header
      fill="horizontal"
      background={'brand'}
      pad='small'
    >
      <Nav direction="row">
        <Anchor label="Character">
          <Link to="/me" />
        </Anchor>
        {characterData.keyword === 'testing' ? (
          <Anchor label="Create">
            <Link to="/testing" />
          </Anchor>
        ) : (
          <></>
        )}
        <Button label="Logout" onClick={onLogoutCharacter} />
      </Nav>
    </Header>
  );
}

export default MainHeader;
