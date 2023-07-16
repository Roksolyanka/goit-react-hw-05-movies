import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_KEY from 'components/config';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
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
