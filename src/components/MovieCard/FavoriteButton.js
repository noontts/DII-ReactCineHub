import React, { useState } from "react";
import './FavoriteButton.css'

export const FavoriteButton = ({addToFavorites, movieObject}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      const updatedFavoriteStatus = !isFavorite;
      console.log("Update: " + updatedFavoriteStatus);
      setIsFavorite(updatedFavoriteStatus);
  
      // Call the addToFavorites function passed from the parent component
      addToFavorites(updatedFavoriteStatus, movieObject);
    };
    
    return (
      <button className="favorite-button" onClick={toggleFavorite}>
        <box-icon name="heart" color={isFavorite ? 'red' : 'white'} type={isFavorite ? 'solid' : 'regular'}></box-icon>
      </button>
    );
};
