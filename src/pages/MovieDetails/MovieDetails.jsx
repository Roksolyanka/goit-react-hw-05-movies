import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useParams, Routes, Route, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { MagnifyingGlass } from 'react-loader-spinner';
import {
  MovieDetailsContainer,
  LinkGoBack,
  MovieDetailsWrapper,
  BackgroundMovie,
  MovieDetailsImage,
  MovieDetailsTitle,
  UserScore,
  OverviewTitle,
  Overview,
  GenresTitle,
  Genres,
  AdditionalInformation,
  AdditionalInfoList,
  AdditionalInfoLink,
} from './MovieDetailsContainer.styled';
import poster from '../../images/coming_soon_default.jpg';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      const fetchDetailsOfMovie = await fetchMovieDetails(movieId);
      setMovie(fetchDetailsOfMovie);
    };

    getMovieDetails();
  }, [movieId]);

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w500/${path}` : poster;
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const getUserScore = score => {
    return Math.round(score);
  };

  return (
    <MovieDetailsContainer>
      <LinkGoBack to={backLinkHref.current}>&larr; Go back</LinkGoBack>
      {movie !== null && (
        <BackgroundMovie
          backgroundurl={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : ''
          }
        >
          <MovieDetailsWrapper>
            <div>
              <MovieDetailsImage
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width={500}
                height={650}
              />
            </div>
            <div>
              <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
              <UserScore>
                User Score: {getUserScore(movie.vote_average)}%
              </UserScore>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{movie.overview}</Overview>
              <GenresTitle>Genres</GenresTitle>
              <Genres>
                {movie.genres.map(genre => genre.name).join(', ')}
              </Genres>
              <div>
                <AdditionalInformation>
                  Additional information
                </AdditionalInformation>
                <AdditionalInfoList>
                  <li>
                    <AdditionalInfoLink to={`/movies/${movieId}/cast`}>
                      Cast
                    </AdditionalInfoLink>
                  </li>
                  <li>
                    <AdditionalInfoLink to={`/movies/${movieId}/reviews`}>
                      Reviews
                    </AdditionalInfoLink>
                  </li>
                </AdditionalInfoList>
              </div>
            </div>
          </MovieDetailsWrapper>
        </BackgroundMovie>
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
        </Routes>
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
