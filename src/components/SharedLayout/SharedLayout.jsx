import { Outlet } from 'react-router';

import { Navig, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Navig>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navig>
      <Outlet></Outlet>
    </>
  );
};

export default SharedLayout;
