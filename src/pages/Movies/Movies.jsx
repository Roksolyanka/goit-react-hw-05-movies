import { Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  MoviesContainer,
  MoviesForm,
  MoviesButton,
  MoviesInput,
} from './MoviesContainer.styled';
import { Loader } from 'pages/Loader/Loader';

const MovieSearchResult = lazy(() =>
  import('../MoviesSearchResult/MovieSearchResult')
);

const Movies = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onChange = event => {
    setSearch(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    const searchTrim = search.trim();
    navigate(`/movies?query=${searchTrim}`);
    setSearch(searchTrim);
  };

  return (
    <MoviesContainer>
      <MoviesForm onSubmit={handleSearch}>
        <MoviesButton type="submit">
          <label className="button-label">
            <i className="fa fa-search"></i>
          </label>
        </MoviesButton>

        <MoviesInput
          type="text"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={onChange}
        />
      </MoviesForm>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<MovieSearchResult />} />
          <Route path="search" element={<MovieSearchResult />} />
        </Routes>
      </Suspense>
    </MoviesContainer>
  );
};

export default Movies;
