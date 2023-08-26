import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchData = async (endpoint, page = 1) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}/${endpoint}`,
        params: {language: 'en-US', page: `${page}`},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJiNWQzNjRjY2MzMmQ5ODRjM2Q4NTI5MGU2ZGZjOSIsInN1YiI6IjY0Y2Y4OWMwNmQ0Yzk3MDEwZDUwZjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm1Hv-FSpnaTxldJLTyCVurnBePOyv3cgci5taDUjKk'
        }
    };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};