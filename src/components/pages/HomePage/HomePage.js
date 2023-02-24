import React from 'react';
import * as Styles from './HomePage.styles';
import { useMoviesData } from '../../../hooks/useMoviesData';

const HomePage = () => {
  const { movies, loading, error } = useMoviesData('/popular');
  console.log(movies);

  const moviesList = movies.map((movie) => (
    <div key={movie.id}>
      <p>{movie.title}</p>
      <Styles.PosterImg
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <p>{movie.release_date.split('-')[0]}</p>
      <p>{movie.vote_average}</p>
    </div>
  ));

  return (
    <Styles.Wrapper>
      <Styles.StyledMoviesList>{moviesList}</Styles.StyledMoviesList>
    </Styles.Wrapper>
  );
};

export default HomePage;
