import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const fetchMovies = await fetchTrendingMovies();
      setMovies(fetchMovies);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
