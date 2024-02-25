import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'components/Api/Api.jsx';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';

const MoviesPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    console.log(`szukamy: ${query}`);
    try {
      if (query) {
        fetchMovieByQuery(query).then(response => {
          console.log(response);
          if (response.results) {
            setSearchResult(response.results);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  const search = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <Searchbar onSubmit={search} />
      {searchResult && <MoviesList movies={searchResult} />}
    </>
  );
};

export default MoviesPage;
