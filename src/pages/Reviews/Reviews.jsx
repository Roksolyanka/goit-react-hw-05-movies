import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import {
  ReviewsContainer,
  ReviewsList,
  ReviewsLink,
  ReviewsAuthor,
  ReviewsContent,
  NoReviews,
} from './ReviewsContainer.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const fetchReviews = await fetchMovieReviews(movieId);
      setReviews(fetchReviews);
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsLink key={review.id}>
              <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
              <ReviewsContent>{review.content}</ReviewsContent>
            </ReviewsLink>
          ))}
        </ReviewsList>
      ) : (
        <NoReviews>We don't have any reviews for this movie.</NoReviews>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
