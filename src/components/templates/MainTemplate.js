import React, { useState } from 'react';
import SearchPanel from '../organisms/SearchPanel/SearchPanel';

const MainTemplate = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();

  //odświeżanie komponentu
  const getSelectedId = (e) => {
    // console.log(e);
    setSelectedMovie(e);
  };
  console.log(selectedMovie);

  return (
    <div style={{ backgroundColor: '#131313', color: '#fff', height: '100%' }}>
      <SearchPanel selectMovie={getSelectedId} />
      {children}
    </div>
  );
};

export default MainTemplate;
