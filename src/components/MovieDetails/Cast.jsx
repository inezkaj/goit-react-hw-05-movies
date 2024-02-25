import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById, imageURL } from 'components/Api/Api.jsx';
import React, { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    fetchMovieCastById(movieId).then(response => {
      if (response.cast) {
        setMovieCast(response.cast);
      }
    });
  }, [movieId]);

  return (
    <>
      {movieCast ? (
        <ul>
          {movieCast.map(actor => {
            return (
              <li className={css.castList} key={actor.id}>
                <div>
                  <img
                    alt="img"
                    className={css.castImg}
                    src={imageURL(actor.profile_path)}
                  ></img>
                </div>{' '}
                <div>
                  <h4>{actor.name}</h4> <br />
                  Character: {actor.character}{' '}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        'no cast'
      )}
    </>
  );
};

Cast.propTypes = { movieId: PropTypes.object };

export default Cast;
