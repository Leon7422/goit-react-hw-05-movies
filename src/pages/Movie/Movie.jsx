import { useParams } from 'react-router';
import { getMovieById } from 'components/API';
import { useState, useEffect } from 'react';
import { Main } from './Movie.styled';
import { Link } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);
  console.log(movie);

  if (!movie) {
    return;
  }

  const userScore = Math.trunc(Number(movie.data.vote_average) * 10);
  const genres = movie.data.genres.map(genre => (
    <span key={genre.id}>{genre.name}</span>
  ));
  console.log(genres);
  const imageSrc = `https://image.tmdb.org/t/p/original/${movie.data.poster_path}`;

  return (
    <>
      <Link>Back</Link>
      <Main>
        <img src={imageSrc} alt="" width="300" />
        <section>
          <h1>{movie?.data?.title || movie?.data?.name}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{movie?.data?.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </section>
      </Main>
    </>
  );
};

export default Movie;
