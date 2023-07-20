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

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const fetchMovies = await fetchTrendingMovies();
      setMovies(fetchMovies);
    };

    getMovies();
  }, []);

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
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
    </HomeContainer>
  );
};

export default Home;
