import { configureStore } from "@reduxjs/toolkit";
import {
  upcomingMoviesReducer,
  topRatedMoviesReducer,
  nowPlayingMoviesReducer,
  popularMoviesReducer,
  recommendMoviesReducer,
} from "../feature/fetchmovies/movieReducer";

export default configureStore({
  reducer: {
    upcoming: upcomingMoviesReducer,
    top_rated: topRatedMoviesReducer,
    now_playing: nowPlayingMoviesReducer,
    popular: popularMoviesReducer,
    recommend : recommendMoviesReducer,
  }
});
