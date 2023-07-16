import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API_KEY from 'components/config';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  const onChange = event => {
    setSearch(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
    // setSearch('');
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
      {searchResults.length > 0 && (
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
      )}
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
