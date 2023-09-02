import { createAction } from '@reduxjs/toolkit';

export const addComment = createAction('ADD_COMMENT');
export const updateComment = createAction('UPDATE_COMMENT');
export const removeComment = createAction('REMOVE_COMMENT');
export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
export const fetchNowPlaying = createAction('FETCH_NOW_PLAYING');
export const fetchPopular = createAction('FETCH_POPULAR');
export const fetchTopRated = createAction('FETCH_TOP_RATED');
export const fetchUpcoming = createAction('FETCH_UPCOMING');
