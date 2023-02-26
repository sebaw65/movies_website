import React from 'react';
import HomePage from '../../organisms/HomePage/HomePage';
import MainTemplate from '../../templates/MainTemplate';

import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();
  return (
    <MainTemplate>
      <HomePage id={id} />
    </MainTemplate>
  );
};

export default Home;
