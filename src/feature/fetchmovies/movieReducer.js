import { createReducer } from '@reduxjs/toolkit';
import { fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchRecommendMovies,
} from '../../actions';


export const upcomingMoviesReducer = createReducer([], {
  [fetchUpcomingMovies]: (state, action) => {
    return action.payload;
  },
});

export const topRatedMoviesReducer = createReducer([], {
  [fetchTopRatedMovies]: (state, action) => {
    return action.payload;
  },
});

export const nowPlayingMoviesReducer = createReducer([], {
  [fetchNowPlayingMovies]: (state, action) => {
    return action.payload;
  },
});

export const popularMoviesReducer = createReducer([], {
  [fetchPopularMovies]: (state, action) => {
    return action.payload;
  },
});

export const recommendMoviesReducer = createReducer([], {
  [fetchRecommendMovies]: (state, action) => {
    return action.payload;
  },
});
