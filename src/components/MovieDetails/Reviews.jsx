import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'components/Api/Api.jsx';
import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(response => {
      if (response.results) {
        setMovieReviews(response.results);
      }
    });
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <h4>
                  Author:
                  {review.author}
                </h4>
                {review.content}
              </li>
            );
          })}
        </ul>
      ) : (
        'We dont have any reviews for this movie'
      )}
    </>
  );
};

Reviews.propTypes = { movieId: PropTypes.object };

export default Reviews;
