import React, { useState } from 'react';
import { useSearchMovies } from '../../../hooks/useSearchMovies';
import { Link } from 'react-router-dom';

const SearchPanel = ({ selectMovie }) => {
  const [input, setInput] = useState('');
  const [refresh, setRefresh] = useState();

  const { moviesList } = useSearchMovies(input);
  console.log(moviesList);

  const handleOnChange = (e) => {
    setInput((prev) => [e.target.value]);
  };
  console.log(selectMovie);

  return (
    <div
      style={{
        display: 'flex',
        height: '4rem',
        width: '100vw',
        justifyContent: 'center',
        paddingTop: '15px',
        flexFlow: 'row wrap',
      }}
    >
      <input
        value={input}
        type="text"
        placeholder="Wpisz nazwę filmu"
        style={{
          width: '90vw',
          height: '2.5rem',
          fontSize: '1.8rem',
          paddingLeft: '10px',
        }}
        onChange={handleOnChange}
      />

      {moviesList
        ? moviesList.map((el) => (
            <Link
              key={el.id}
              to={`/movie/${el.id}`}
              style={{
                flexBasis: '90%',
                width: '0px',
                zIndex: '20',
                backgroundColor: 'white',
                color: 'black',
                textDecoration: 'none',
              }}
              onClick={(e) => selectMovie(e.target.id)}
            >
              {el.original_title}
            </Link>
          ))
        : null}
    </div>
  );
};

export default SearchPanel;
