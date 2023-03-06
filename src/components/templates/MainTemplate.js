import React, { useState } from 'react';
import SearchPanel from '../organisms/SearchPanel/SearchPanel';

import * as Styles from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();

  //odświeżanie komponentu
  const getSelectedId = (e) => {
    // console.log(e);
    setSelectedMovie(e);
  };
  console.log(selectedMovie);

  return (
    <Styles.MainContainer>
      <header>
        Logo
        <SearchPanel selectMovie={getSelectedId} />
      </header>
      {children}
    </Styles.MainContainer>
  );
};

export default MainTemplate;
