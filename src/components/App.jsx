import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header, HeaderList, Link } from './HeaderContainer.styled';
import { Loader } from 'pages/Loader/Loader';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Movies = React.lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const Cast = React.lazy(() => import('../pages/Cast/Cast'));
const Reviews = React.lazy(() => import('../pages/Reviews/Reviews'));
const MovieSearchResult = React.lazy(() =>
  import('../pages/MoviesSearchResult/MovieSearchResult')
);

const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </HeaderList>
        </nav>
      </Header>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />}>
            <Route path="search" element={<MovieSearchResult />} />
          </Route>
          <Route path="/movies/:movieId//*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
