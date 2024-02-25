import React, { useState, useEffect } from 'react';
import { fetchTrending } from 'components/Api/Api.jsx';
import Trending from 'components/Trending/Trending.jsx';

const Home = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    console.log('trying to fetch');
    fetchTrending().then(
      response => {
        console.log(response);
        if (response.results) {
          setTrending(response.results);
        }
      },
      reason => {
        console.log(reason);
      }
    );
  }, []);

  return <div>{trending ? <Trending movies={trending} /> : 'no trending'}</div>;
};

export default Home;
