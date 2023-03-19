import axios from 'axios';

const KEY = '9beeda1ea4aae4d04f0fe1c9b0b0fd1d';
console.log('KEY:', KEY);

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

// export async function searchImage(query, currentPage) {
//   const API_KEY = '9beeda1ea4aae4d04f0fe1c9b0b0fd1d';
//   const BASE_URL = 'https://api.themoviedb.org/';

//   const response = await axios.get(`${BASE_URL}`, {
//     params: {
//       key: `${API_KEY}`,
//       // q: `${query}`,
//       // image_type: 'photo',
//       // orientation: 'horizontal',
//       // safesearch: 'true',
//       // page: `${currentPage}`,
//       // per_page: 12,
//     },
//   });

//   return response.data;
// }
