import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'components/MoviesList/MoviesList';

const Trending = ({ movies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
};

Trending.propTypes = { movies: PropTypes.array };

export default Trending;
