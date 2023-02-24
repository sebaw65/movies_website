import React, { useEffect, useState } from 'react';

export const useMoviesData = (query) => {
  const [movies, setMovies] = useState([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${query}?api_key=${key}&page=1`
      );
      const movies = await res.json();
      setMovies(movies.results);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { movies, loading, error };
};
