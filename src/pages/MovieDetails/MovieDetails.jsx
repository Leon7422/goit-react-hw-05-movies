import { Outlet, useParams } from 'react-router';
import { getMovieById } from 'components/API';
import { useState, useEffect } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import {
  Main,
  GenresInfo,
  AddLink,
  AddList,
  BackLink,
  SectionAdditionalInformation,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return;
  }

  const userScore = Math.trunc(Number(movie.data.vote_average) * 10);
  const genres = movie.data.genres.map(genre => (
    <span key={genre.id}>{genre.name}</span>
  ));
  const imageSrc = `https://image.tmdb.org/t/p/original/${movie.data.poster_path}`;

  return (
    <>
      <BackLink>
        <MdOutlineArrowBack />
        <span>Back</span>
      </BackLink>
      <Main>
        <img src={imageSrc} alt="" width="300" />
        <section>
          <h1>{movie?.data?.title || movie?.data?.name}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview:</h2>
          <p>{movie?.data?.overview}</p>
          <h3>Genres:</h3>
          <GenresInfo>{genres}</GenresInfo>
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
      <Outlet></Outlet>
    </>
  );
};

export default MovieDetails;
