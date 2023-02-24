import React from 'react';
import { useMoviesData } from '../../../hooks/useMoviesData';

const HomePage = () => {
  const { movies, loading, error } = useMoviesData('/popular');
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

export default HomePage;
