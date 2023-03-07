import React, { useState } from 'react';

import * as Styles from './MainTemplate.styles';
import Header from '../organisms/header/Header';

const MainTemplate = ({ children }) => {
  return (
    <Styles.MainContainer>
      <Header />
      {children}
    </Styles.MainContainer>
  );
};

export default MainTemplate;
