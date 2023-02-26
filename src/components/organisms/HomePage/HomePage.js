import React from 'react';
import * as Styles from './HomePage.styles';
import { useMoviesData } from '../../../hooks/useMoviesData';
import Movie from '../../molecules/MoviePoster/MoviePoster';

const HomePage = () => {
  const { movies } = useMoviesData('/popular');
  // console.log(movies);

  return (
    <Styles.Wrapper>
      <Styles.StyledMoviesList>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            imgUrl={movie.poster_path}
            title={movie.title}
            relaseDate={movie.release_date}
            rate={movie.vote_average}
          />
        ))}
      </Styles.StyledMoviesList>
    </Styles.Wrapper>
  );
};

export default HomePage;
