import axios from 'axios';

export const baseMoviesGet = async () => {
  const BASE_URL =
    'https://api.themoviedb.org/3/trending/all/day?api_key=40b1202aa7011d9f08f63b0e75c279f2';
  const result = await axios.get(`${BASE_URL}`);
  console.log(result.data.results);
  return result.data.results;
};

export const getMovieById = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=40b1202aa7011d9f08f63b0e75c279f2`;
  const result = await axios.get(`${BASE_URL}`);
  return result;
};
