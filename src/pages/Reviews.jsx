import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_KEY from 'components/config';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3//movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
