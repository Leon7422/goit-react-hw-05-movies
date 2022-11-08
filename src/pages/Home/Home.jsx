import { baseMoviesGet } from 'components/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { MovieList, MovieItem } from './Home.styled';

const Home = () => {
  const [baseMovies, setBaseMovies] = useState([]);

  useEffect(() => {
    baseMoviesGet().then(setBaseMovies);
  }, []);

  return (
    <MovieList>
      {baseMovies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieItem to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </MovieItem>
          </li>
        );
      })}
    </MovieList>
  );
};

export default Home;
