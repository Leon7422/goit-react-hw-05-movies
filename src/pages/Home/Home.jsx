import { baseMoviesGet } from 'components/API';
import { useEffect, useState } from 'react';
import { MovieList, MovieItem } from './Home.styled';
import { useLocation } from 'react-router';

const Home = () => {
  const [baseMovies, setBaseMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    baseMoviesGet().then(setBaseMovies);
  }, []);

  return (
    <MovieList>
      {baseMovies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieItem to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </MovieItem>
          </li>
        );
      })}
    </MovieList>
  );
};

export default Home;
