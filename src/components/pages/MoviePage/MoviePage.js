import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesData } from '../../../hooks/useMoviesData';

const MoviePage = () => {
  const { id } = useParams();
  const { movies, loading, error } = useMoviesData(`${id}`);

  console.log(id, movies);

  return <div>MoviePage</div>;
};

export default MoviePage;
