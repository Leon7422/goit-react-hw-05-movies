import { Outlet, useParams, useLocation } from 'react-router';
import { getMovieById } from 'components/API';
import { useState, useEffect, Suspense } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import {
  Main,
  GenresInfo,
  AddLink,
  AddList,
  BackLink,
  SectionAdditionalInformation,
  ErrorMessage,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(id)
      .then(res => setMovie(res.data))
      .catch(error => setError(error.message));
  }, [id]);

  const feedback = () => {
    return Math.trunc(Number(movie.vote_average) * 10);
  };

  return (
    <>
      {movie && (
        <>
          <BackLink to={location.state?.from ?? '/'}>
            <MdOutlineArrowBack />
            <span>Back</span>
          </BackLink>
          <Main>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              width="300"
            />
            <section>
              <h1>{movie.title || movie.name}</h1>
              <p>User Score: {feedback()}%</p>
              <h2>Overview:</h2>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <GenresInfo>
                {movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </GenresInfo>
            </section>
          </Main>
          <SectionAdditionalInformation>
            <h2>Additional information</h2>
            <AddList>
              <li>
                <AddLink to="cast">Cast</AddLink>
              </li>
              <li>
                <AddLink to="reviews">Reviews</AddLink>
              </li>
            </AddList>
          </SectionAdditionalInformation>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
      {error && !movie && (
        <ErrorMessage>
          Sorry, this page is not avaliable yet. Please try again later
        </ErrorMessage>
      )}
    </>
  );
};

export default MovieDetails;
