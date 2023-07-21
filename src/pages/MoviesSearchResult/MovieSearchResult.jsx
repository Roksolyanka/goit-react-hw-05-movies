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
  NoMovies,
} from './SearchResult.styled';
import { Button } from 'pages/Button/Button';
import { Loader } from 'pages/Loader/Loader';

const MovieSearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [firstSearch, setFirstSearch] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovieSearch = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');

        if (query !== searchQuery) {
          setSearchQuery(query);
          setSearchResults([]);
          setCurrentPage(1);
          setLastPage(false);
        }

        if (query) {
          setFirstSearch(false);
          const fetchSearchResult = await fetchMovieSearch(query, currentPage);
         if (fetchSearchResult.length === 0) {
           setLastPage(true);
         } else {
           setSearchResults(prevResults =>
             currentPage === 1
               ? fetchSearchResult
               : [...prevResults, ...fetchSearchResult]
           );
         }
        }
      } catch (error) {
        console.log('Error searching movies:', error);
      } finally {
        setIsLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    };

    getMovieSearch();
  }, [location.search, currentPage, searchQuery]);

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <SearchResultContainer>
      {firstSearch && searchResults.length === 0 ? null : (
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
          {isLoading && <Loader />}

          {searchResults.length > 0 && !isLoading && !lastPage && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </div>
      )}
      {!firstSearch &&
        searchResults.length === 0 && ( // Перевірка на перший пошук та пустий результат
          <NoMovies>No movies were found for your search query.</NoMovies>
        )}
    </SearchResultContainer>
  );
};

export default MovieSearchResult;
