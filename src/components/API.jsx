import axios from 'axios';

export const baseMoviesGet = async () => {
  const BASE_URL =
    'https://api.themoviedb.org/3/trending/all/day?api_key=40b1202aa7011d9f08f63b0e75c279f2';
  const result = await axios.get(`${BASE_URL}`);
  return result.data.results;
};

export const getMovieById = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=40b1202aa7011d9f08f63b0e75c279f2`;
  const result = await axios.get(`${BASE_URL}`);
  return result;
};

export const getCastByMovieId = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=40b1202aa7011d9f08f63b0e75c279f2&language=en-US`;
  const result = await axios.get(`${BASE_URL}`);
  console.log(result.data.cast);
  return result.data.cast;
};

export const getReviewsByMovieId = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=40b1202aa7011d9f08f63b0e75c279f2&language=en-US&page=1`;
  const result = await axios.get(`${BASE_URL}`);
  console.log(result.data.results);
  return result.data.results;
};
