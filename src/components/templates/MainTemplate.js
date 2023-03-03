import React, { useState } from 'react';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { Link } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  const [input, setInput] = useState('');
  const { moviesList } = useSearchMovies(input);
  console.log(moviesList);

  const handleOnChange = (e) => {
    setInput((prev) => [e.target.value]);
  };
  return (
    <div style={{ backgroundColor: '#131313', color: '#fff', height: '100%' }}>
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
          type="text"
          value={input}
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
              >
                <p>{el.original_title}</p>
              </Link>
            ))
          : null}
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>{children}</div>
    </div>
  );
};

export default MainTemplate;
