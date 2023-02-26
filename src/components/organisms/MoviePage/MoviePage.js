import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesData } from '../../../hooks/useMoviesData';
import { AiFillStar } from 'react-icons/ai';

const MoviePage = () => {
  const { id } = useParams();
  const { movies, loading, error } = useMoviesData(id);
  console.log(movies);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.title}
      />
      <h1>{movies.title}</h1>
      <div>
        <AiFillStar /> <p>{movies.vote_average}</p>
      </div>
      {movies.runtime ? <p>{`${movies.runtime} minutes`} </p> : null}
      {movies.release_date ? (
        <p>${movies.release_date.split('-')[0]} </p>
      ) : null}
      {movies.genres
        ? movies.genres.map((category) => (
            <p key={category.id}>{category.name}</p>
          ))
        : null}
      {movies.overview ? <p>{movies.overview}</p> : null}
    </div>
  );
};

export default MoviePage;
