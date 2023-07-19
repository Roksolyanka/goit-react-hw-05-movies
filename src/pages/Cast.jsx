import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      const fetchCast = await fetchMovieCast(movieId);
      setCast(fetchCast);
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast information for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
