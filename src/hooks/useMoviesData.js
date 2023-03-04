import { useEffect, useState } from 'react';

export const useMoviesData = (query) => {
  const [movies, setMovies] = useState([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData();
  }, [query]);

  const getData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${query}?api_key=${key}&page=1`
      );

      if (res.status === 200) {
        const movies = await res.json();

        //jesli istnieje klucz results to zwracamy jego zawartosc
        if (movies.results) setMovies(movies.results);
        //jesli nie istnieje zwracamy caly obiekt
        else setMovies(movies);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { movies, loading, error };
};
