import React, { Suspense } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header, HeaderList, Link } from './HeaderContainer.styled';

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
      <Suspense
        fallback={
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
      >
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
