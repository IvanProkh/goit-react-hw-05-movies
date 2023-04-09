import axios from 'axios';

// axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const API_KEY = '9beeda1ea4aae4d04f0fe1c9b0b0fd1d';
const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_BASE_URL = `https://image.tmdb.org/t/p`;

export const searchImages = poster => {
  return poster !== null
    ? `${IMG_BASE_URL}/w400${poster}`
    : 'https://sd.keepcalms.com/i-w400/keep-calm-poster-not-found.jpg';
};

export const searchCastImage = poster => {
  return poster !== null
    ? `${IMG_BASE_URL}/w200${poster}`
    : 'https://sd.keepcalms.com/i-w400/keep-calm-poster-not-found.jpg';
};

export async function searchMovies(query) {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      query: `${query}`,
      include_adult: 'false',
    },
  });

  return data;
}

export async function getTrending() {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: `${API_KEY}`,
      page: 1,
    },
  });
  return data;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data;
}

export async function getMovieCast(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
}
