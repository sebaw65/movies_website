import React, { useState } from 'react';
import SearchPanel from '../organisms/SearchPanel/SearchPanel';

const MainTemplate = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();

  //odświeżanie komponentu
  const getSelectedId = (e) => {
    setSelectedMovie(e);
  };

  return (
    <div style={{ backgroundColor: '#131313', color: '#fff', height: '100%' }}>
      <SearchPanel selectMovie={getSelectedId} />
      {/*!!!! w tym miejscu trzeba wywołać odświeżenie stanu !!!!*/}
      {children}
    </div>
  );
};

export default MainTemplate;
