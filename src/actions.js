import { createAction } from "@reduxjs/toolkit";

export const fetchUpcomingMovies = createAction('FETCH_UPCOMING_MOVIES');
export const fetchTopRatedMovies = createAction('FETCH_TOP_RATED_MOVIES');
export const fetchNowPlayingMovies = createAction('FETCH_NOW_PLAYING_MOVIES');
export const fetchPopularMovies = createAction('FETCH_POPULAR_MOVIES');
export const fetchRecommendMovies = createAction('FETCH_RECOMMEND_MOVIES');