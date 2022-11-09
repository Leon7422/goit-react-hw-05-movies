import { Outlet } from 'react-router';
import { Suspense } from 'react';

import { Navig, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Navig>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navig>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
