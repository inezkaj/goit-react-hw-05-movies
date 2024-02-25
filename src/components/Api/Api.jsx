const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5fb06eb336d69d5be41d461140de8238';

export async function fetchTrending() {
  const fetchedData = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieReviewsById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieCastById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieByQuery(query) {
  const fetchedData = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const response = await fetchedData.json();
  return response;
}

export function imageURL(url) {
  return 'https://www.themoviedb.org/t/p/w220_and_h330_face' + url;
}
