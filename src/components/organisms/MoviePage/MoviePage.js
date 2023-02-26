import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesData } from '../../../hooks/useMoviesData';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';

import * as Styles from './StyledMoviePage';

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMoviesData(id);
  // console.log(movies);

  return (
    <Styles.Content>
      <Styles.PosterImg
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.title}
      />
      <Styles.Title>{movies.title}</Styles.Title>
      <Styles.Rating>
        <AiFillStar /> <p>{movies.vote_average}</p>
      </Styles.Rating>
      <Styles.Runtime>
        <AiFillClockCircle />
        <p>{movies.runtime ? `${movies.runtime} minutes` : null}</p>
      </Styles.Runtime>
      <Styles.ReleaseDate>
        {movies.release_date ? movies.release_date.split('-')[0] : null}
      </Styles.ReleaseDate>
      <Styles.Categories>
        {movies.genres
          ? movies.genres.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))
          : null}
      </Styles.Categories>
      <Styles.Description>
        {movies.overview ? movies.overview : null}
      </Styles.Description>
    </Styles.Content>
  );
};

export default MoviePage;
