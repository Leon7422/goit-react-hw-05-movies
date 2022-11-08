import { getCastByMovieId } from '../API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getCastByMovieId(id).then(setCast);
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.map(person => {
        const imgSrc = person.profile_path
          ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
          : 'https://media.istockphoto.com/id/1162198273/vector/question-mark-icon-flat-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=MJbd8bw2iewJRd8sEkHxyGMgY3__j9MKA8cXvIvLT9E=';
        return (
          <CastItem key={person.id}>
            <img src={imgSrc} alt="" width="150px" height="225px" />
            <p>Name: {person.name}</p>
            <p>Character: {person.character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
