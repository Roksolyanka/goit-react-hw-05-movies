// const API_KEY = 'a9909d47681c6b09be18c529deedffef';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// export const fetchMovieData = async movieId => {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//   );

//   return response;
// };





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
