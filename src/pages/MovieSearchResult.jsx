import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API_KEY from 'components/config';

const MovieSearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');

        if (query) {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
          );
          const data = await response.json();
          setSearchResults(data.results);
        }
      } catch (error) {
        console.log('Error searching movies:', error);
      }
    };

    handleSearch();
  }, [location.search]);

  return (
    <div>
      {searchResults.length > 0 ? (
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
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieSearchResult;

/* <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link> */
