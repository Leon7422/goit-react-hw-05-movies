import { Routes, Route } from 'react-router';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import Movie from 'pages/Movie/Movie';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
};
