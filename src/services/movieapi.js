import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJiNWQzNjRjY2MzMmQ5ODRjM2Q4NTI5MGU2ZGZjOSIsInN1YiI6IjY0Y2Y4OWMwNmQ0Yzk3MDEwZDUwZjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm1Hv-FSpnaTxldJLTyCVurnBePOyv3cgci5taDUjKk";

export const fetchData = async (endpoint, page = 1) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${endpoint}`,
    params: { language: "en-EN", page: `${page}` },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovie = async (keyword) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${keyword}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:`${ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (movie_id) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${movie_id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:`${ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
