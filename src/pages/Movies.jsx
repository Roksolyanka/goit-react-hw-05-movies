import { Suspense, lazy, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Route, Routes, useNavigate } from 'react-router-dom';

const MovieSearchResult = lazy(() => import('./MovieSearchResult'));

const Movies = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onChange = event => {
    setSearch(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    navigate(`/movies?query=${search}`);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <button type="submit">
          <label className="button-label">
            <i className="fa fa-search"></i>
          </label>
        </button>

        <input
          type="text"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={onChange}
        />
      </form>
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
          <Route path="/" element={<MovieSearchResult />} />
          <Route path="search" element={<MovieSearchResult />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Movies;

/* <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link> */

/* <Link to={`/movies/${movie.id}`}>{movie.title}</Link> */


      
        /* {searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */
      
