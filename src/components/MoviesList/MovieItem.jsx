import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ movieData }) => {
  const { title, id } = movieData;

  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

MovieItem.propTypes = { movieData: PropTypes.object };

export default MovieItem;
