import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IMAGE_BASEURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const MovieItem = ({ movieData }) => {
  const { backdrop_path, title, id } = movieData;
  const imageUrl = IMAGE_BASEURL + backdrop_path;

  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

MovieItem.propTypes = { movieData: PropTypes.object };

export default MovieItem;
