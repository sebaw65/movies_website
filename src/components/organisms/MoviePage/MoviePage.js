import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesData } from '../../../hooks/useMoviesData';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';

import * as Styles from './MoviePage.styled';

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMoviesData(id);
  // console.log(movies);

  return (
    <Styles.Content>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.title}
      />
      <h1>{movies.title}</h1>
      <Styles.Rating>
        <AiFillStar /> <p>{movies.vote_average}</p>
      </Styles.Rating>
      <Styles.Runtime>
        <AiFillClockCircle />
        <p>{`${movies.runtime} minutes`}</p>
      </Styles.Runtime>
      <Styles.ReleaseDate>
        {movies.release_date?.split('-')[0]}
      </Styles.ReleaseDate>
      <Styles.Categories>
        {movies.genres?.map((category) => (
          <p key={category.id}>{category.name}</p>
        ))}
      </Styles.Categories>
      <Styles.Description>{movies.overview}</Styles.Description>
    </Styles.Content>
  );
};

export default MoviePage;
