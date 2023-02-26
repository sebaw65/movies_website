import React, { useState } from 'react';
import * as Styles from './MoviePoster.styles';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Movie = ({ id, imgUrl, title, relaseDate, rate }) => {
  const [hover, setHover] = useState(false);

  return (
    <Styles.MovieContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/movie/${id}`}>
        <Styles.PosterImg
          src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
          alt={`${title} poster`}
          isHovered={hover}
        />
        {hover && (
          <Styles.MovieDetails>
            <Styles.TitleAndYear>
              <Styles.MovieTitle>{title}</Styles.MovieTitle>
              <Styles.MovieProdYear>
                {relaseDate.split('-')[0]}
              </Styles.MovieProdYear>
            </Styles.TitleAndYear>
            <Styles.MovieRating>
              <AiFillStar />
              <p>{rate}</p>
            </Styles.MovieRating>
          </Styles.MovieDetails>
        )}
      </Link>
    </Styles.MovieContainer>
  );
};

export default Movie;
