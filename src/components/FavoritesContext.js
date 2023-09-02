import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  const addToFavorites = (isFavorite, movieObj) => {
    if (!isFavorite) {
      removeFromFavorites(movieObj);
    } else {
      addMovieToFavorites(movieObj);
    }
  };

  const addMovieToFavorites = (movieObj) => {
    if (!favoriteMovie.some((movie) => movie.id === movieObj.id)) {
      setFavoriteMovie((prevFavorites) => [...prevFavorites, movieObj]);
      console.log(`${movieObj.id} is Add!`);
    }
  };

  const removeFromFavorites = (movieObj) => {
    setFavoriteMovie((prevFavorites) => 
    prevFavorites.filter((favoriteMovie) => favoriteMovie.id !== movieObj.id)
    );
    console.log(`${movieObj.id} is Delete!`);
  };

  console.log(favoriteMovie);
  return (
    <FavoritesContext.Provider
      value={{ favoriteMovie, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
