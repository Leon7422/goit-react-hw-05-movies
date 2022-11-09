import { Form, MoviesList, MovieLink } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { findMovies } from 'components/API';
import { useLocation } from 'react-router';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const params = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!params) {
      return;
    }

    setInputValue(params);
    findMovies(params).then(setMovieList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const InputValue = e => {
    console.log(inputValue);
    setInputValue(e.target.value);
  };

  const find = async e => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    setMovieList(await findMovies(inputValue));
    console.log(MoviesList);
  };

  return (
    <>
      <Form onSubmit={find}>
        <input type="text" value={inputValue} onChange={InputValue} />
        <button type="submit">Search</button>
      </Form>

      <MoviesList>
        {movieList.map(item => (
          <li key={item.id}>
            <MovieLink to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </MovieLink>
          </li>
        ))}{' '}
      </MoviesList>
    </>
  );
};

export default Movies;
