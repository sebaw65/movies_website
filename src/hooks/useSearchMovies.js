import { useEffect, useState } from 'react';

export const useSearchMovies = (props) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    let debounce = null;

    if (props.length === 0) setMoviesList([]);
    debounce = setTimeout(() => searchMovies(), 500);
    return () => clearInterval(debounce);
  }, [props]);

  const searchMovies = async () => {
    const key = process.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${props}`
    );
    const movies = await res.json();
    setMoviesList(movies.results);
  };

  return {
    moviesList,
  };
};
