const API_KEY = '6c6629b9a6051b47df8b53c44a5b68ca';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error fetching trending movies:', error);
    return [];
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    return null;
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.log('Error fetching movie credits:', error);
    return [];
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error fetching movie reviews:', error);
    return [];
  }
}

export async function fetchMovieSearch(query) {
  try {
    const response = await fetch(
      `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error searching movies:', error);
    return [];
  }
}

// export const fetchPosts = async () => {
//   const { data } = await axios.get(`${BASE_URL}/posts`);
//   return data;
// };

// export const fetchPostComments = async movieId => {
//   const { data } = await axios.get(`${BASE_URL}/posts/${movieId}/comments`);
//   return data;
// };

// async function getTrendingMovie() {
//   const response = await fetch(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
//   );

//   return response.json();
// }

// export const getMovieById = async movieId => {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//   );

//   return response.json();
// };

// export const getMovieCastById = async movieId => {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
//   );

//   return response.json();
// };

// export const getMovieReviewsById = async movieId => {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
//   );

//   return response.json();
// };

// export async function getSearchByKeyWord(query, page) {
//   const response = await fetch(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
//   );

//   return response.json();
// }

// export const STATUS = {
//   idle: 'idle',
//   pending: 'pending',
//   rejected: 'rejected',
//   resolved: 'resolved',
// };

// export default API_KEY;
