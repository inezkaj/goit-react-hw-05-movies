import PropTypes from 'prop-types';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieById, imageURL } from 'components/Api/Api.jsx';
import React, { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(movieId).then(
      response => {
        if (response) {
          setMovieData(response);
        }
      },
      reason => {
        console.log(reason);
      }
    );
  }, [movieId, movieData]);

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
        type="button"
        className={css.btnMovies}
      >
        GO BACK
      </button>
      {movieData ? (
        <>
          <div className={css.details}>
            <div>
              <img
                alt="img_movie"
                src={imageURL(movieData.backdrop_path)}
              ></img>
            </div>
            <div>
              <h2>{movieData.title}</h2>
              User score: {Math.floor(movieData.vote_average * 10)}%
              <h3>Overview</h3>
              {movieData.overview}
              <h4>Genres</h4>
              {movieData.genres
                .map(g => {
                  return g.name;
                })
                .join(', ')}
            </div>
          </div>
          <hr />
          <div>
            <h5>Additional information </h5>
            <Link to={'cast'}>Cast</Link>
            <br />
            <Link to={'reviews'}>Reviews</Link>
          </div>
          <hr />
          <Outlet />
        </>
      ) : (
        'no nie ma'
      )}
    </>
  );
};

MovieDetails.propTypes = { movieData: PropTypes.object };

export default MovieDetails;
