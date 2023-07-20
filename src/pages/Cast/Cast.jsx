import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import {
  CastContainer,
  CastList,
  CastLink,
  CastPhoto,
  CastInfo,
  CastName,
  CastCharacter,
} from './CastContainer.styled';
import photo from '../../images/nophoto.jpg';

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

  const getPhotoUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : photo;
  };

  return (
    <CastContainer>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastLink key={actor.id}>
              <CastPhoto
                src={getPhotoUrl(actor.profile_path)}
                alt={actor.name}
                width={150}
                height={200}
              />
              <CastInfo>
                <CastName>{actor.name}</CastName>
                <CastCharacter>Character: {actor.character}</CastCharacter>
              </CastInfo>
            </CastLink>
          ))}
        </CastList>
      ) : (
        <p>We don't have any cast information for this movie.</p>
      )}
    </CastContainer>
  );
};

export default Cast;
