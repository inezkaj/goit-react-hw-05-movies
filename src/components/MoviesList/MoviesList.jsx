import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from 'components/MoviesList/MovieItem.jsx';

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <MovieItem key={movie.id} movieData={movie} />
          ))}
        </ul>
      ) : (
        <p>No results found!</p>
      )}
    </>
  );
};

MoviesList.propTypes = { movies: PropTypes.array };

export default MoviesList;
