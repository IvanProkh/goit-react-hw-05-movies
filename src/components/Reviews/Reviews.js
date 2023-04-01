import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../services/searchApi';

import { ReviewsList, EmptyReviews } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => setReviews(res.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <div key={id}>
                <h3>
                  Author: <span>{author}</span>
                </h3>
                <p>{content}</p>
              </div>
            );
          })}
        </ReviewsList>
      ) : (
        <EmptyReviews>
          ❗❗❗Sorry, we don`t have any reviews for this movie❗❗❗
        </EmptyReviews>
      )}
    </>
  );
};
