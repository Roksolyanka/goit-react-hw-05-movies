import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from 'services/api';

const MovieSearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovieSearch = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');

        if (query) {
          const fetchSearchResult = await fetchMovieSearch(query);
          setSearchResults(fetchSearchResult);
        }
      } catch (error) {
        console.log('Error searching movies:', error);
      }
    };

    getMovieSearch();
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
