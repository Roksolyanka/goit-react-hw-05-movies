import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import poster from '../../images/coming_soon_default.jpg';
import {
  HomeContainer,
  HomeTitle,
  HomeList,
  HomeLink,
  Image,
  MovieTitle,
} from './HomeContainer.styled';
import { Button } from 'pages/Button/Button';
import { Loader } from 'pages/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const fetchMovies = await fetchTrendingMovies(currentPage);
        if (fetchMovies.length === 0) {
          setLastPage(true);
        } else {
          setMovies(prevMovies =>
            currentPage === 1 ? fetchMovies : [...prevMovies, ...fetchMovies]
          );
        }
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [currentPage]);

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <HomeLink>
              <Image
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width={224}
                height={325}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </HomeLink>
          </Link>
        ))}
      </HomeList>
      {isLoading && <Loader></Loader>}
      {!lastPage && movies.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </HomeContainer>
  );
};

export default Home;
