import React from 'react';
import * as Styles from './HomePage.styles';
import { useMoviesData } from '../../../hooks/useMoviesData';
import Movie from '../../organisms/MoviePoster/MoviePoster';

const HomePage = () => {
  const { movies, loading, error } = useMoviesData('/popular');
  // console.log(movies);

  const handleClick = () => {
    console.log('click');
  };
  return (
    <Styles.Wrapper>
      <Styles.StyledMoviesList>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            imgUrl={movie.poster_path}
            title={movie.title}
            relaseDate={movie.release_date}
            rate={movie.vote_average}
            onClick={handleClick}
          />
        ))}
      </Styles.StyledMoviesList>
    </Styles.Wrapper>
  );
};

export default HomePage;
