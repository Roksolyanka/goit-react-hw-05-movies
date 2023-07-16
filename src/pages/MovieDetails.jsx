import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import API_KEY from 'components/config';
import { MagnifyingGlass } from 'react-loader-spinner';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3//movie/${movieId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={backLinkHref.current}>&larr; Go back</Link>
      {movie !== null && (
        <div>
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h1>{movie.title}</h1>
              <p>User Score: {movie.vote_average}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
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
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>{' '}
      </Suspense>
    </div>
  );
};

export default MovieDetails;
