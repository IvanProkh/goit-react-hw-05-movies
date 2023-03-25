import axios from 'axios';

// const KEY = '9beeda1ea4aae4d04f0fe1c9b0b0fd1d';

// axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const API_KEY = '9beeda1ea4aae4d04f0fe1c9b0b0fd1d';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovie(query, currentPage) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      query: `${query}`,
      include_adult: 'false',
      page: `${currentPage}`,
      // per_page: 12,
    },
  });

  return response.data;
}

export async function getTrending() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: `${API_KEY}`,
      page: 1,
    },
  });
  console.log(response);
  return response.data;
}
