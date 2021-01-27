import React from 'react';
import { Header, Button, Nav, Anchor } from 'grommet';
import { Link } from '@reach/router';
import './MainHeader.css';

function MainHeader(props) {
  const { characterData, onLogoutCharacter } = props;
  return (
    <Header
      fill="horizontal"
      background={'light-5'}
      pad='small'
      align='center'
    >
      <Nav direction="row">
        <Link className='header__link' to="/me">
          Character
        </Link>
        {characterData.keyword === 'testing' ? (
          <Link className='header__link' to="/create">
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
