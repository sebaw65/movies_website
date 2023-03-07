import React, { useState } from 'react';
import { useSearchMovies } from '../../../hooks/useSearchMovies';
import { Link } from 'react-router-dom';

import * as Styles from './SearchPanel.style';

const SearchPanel = () => {
  const [input, setInput] = useState('');
  const { moviesList } = useSearchMovies(input);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  if (!moviesList) return null;
  return (
    <Styles.SearchContainter>
      <input
        value={input}
        type="text"
        placeholder="Wpisz nazwę filmu"
        onChange={handleOnChange}
      />

      {moviesList.map((el) => (
        <Link
          key={el.id}
          id={el.id}
          to={`/movie/${el.id}`}
          onClick={() => setInput('')}
        >
          {el.original_title}
        </Link>
      ))}
    </Styles.SearchContainter>
  );
};

export default SearchPanel;
