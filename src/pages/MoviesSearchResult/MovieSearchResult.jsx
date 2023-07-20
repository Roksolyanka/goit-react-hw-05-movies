import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from 'services/api';
import poster from '../../images/coming_soon_default.jpg';
import {
  SearchResultContainer,
  SearchResultList,
  SearchResultLink,
  Image,
  MovieTitle,
} from './SearchResult.styled';

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

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
  };

  return (
    <SearchResultContainer>
      <div>
        <SearchResultList>
          {searchResults.map(movie => (
            <Link
              key={movie.id}
              state={{ from: location }}
              to={`/movies/${movie.id}`}
            >
              <SearchResultLink>
                <Image
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  width={224}
                  height={325}
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </SearchResultLink>
            </Link>
          ))}
        </SearchResultList>
      </div>
    </SearchResultContainer>
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
