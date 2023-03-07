import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';

import * as Styles from './Header.styles';
const Header = () => {
  return (
    <Styles.Header>
      <nav>
        <Styles.HomePageLink to={'/'}>
          <Styles.Logo />
          <h1>ScreenZone</h1>
        </Styles.HomePageLink>
      </nav>
      <SearchPanel />
    </Styles.Header>
  );
};

export default Header;
