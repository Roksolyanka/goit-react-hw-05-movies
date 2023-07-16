import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_KEY from 'components/config';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3//movie/${movieId}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.log('Error fetching movie credits:', error);
      }
    };

    fetchMovieCast();
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
