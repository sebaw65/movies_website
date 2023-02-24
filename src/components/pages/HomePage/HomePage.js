import React from 'react';
import * as Styles from './HomePage.styles';
import { useMoviesData } from '../../../hooks/useMoviesData';
import { AiFillStar } from 'react-icons/ai';

const HomePage = () => {
  const { movies, loading, error } = useMoviesData('/popular');
  console.log(movies);

  const moviesList = movies.map((movie) => (
    <Styles.MovieContainer key={movie.id}>
      <Styles.PosterImg
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <Styles.TitleAndYear>
        <Styles.MovieTitle>{movie.title}</Styles.MovieTitle>
        <Styles.MovieProdYear>
          {movie.release_date.split('-')[0]}
        </Styles.MovieProdYear>
      </Styles.TitleAndYear>
      <Styles.MovieRating>
        <AiFillStar />
        <p>{movie.vote_average}</p>
      </Styles.MovieRating>
    </Styles.MovieContainer>
  ));

  return (
    <Styles.Wrapper>
      <Styles.StyledMoviesList>{moviesList}</Styles.StyledMoviesList>
    </Styles.Wrapper>
  );
};

export default HomePage;
