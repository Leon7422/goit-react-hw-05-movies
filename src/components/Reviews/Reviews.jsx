import { getReviewsByMovieId } from 'components/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getReviewsByMovieId(id).then(setReviews);
  }, [id]);

  if (!reviews) {
    return;
  }
  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(item => {
          return (
            <li key={item.id}>
              <h2>{item.author}</h2>
              <p>{item.content}</p>
            </li>
          );
        })
      ) : (
        <div>We dont have any reviews for this movie :(</div>
      )}
    </ul>
  );
};

export default Reviews;
