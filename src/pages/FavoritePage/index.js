import React from 'react'
import { MovieCard } from '../../components/MovieCard'

export const FavoritePage = ({ favoriteMovies, addToFavorite}) => {
  return (
    <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {favoriteMovies.map((movieObject)=>(
                <MovieCard key={movieObject.id} movieObject={movieObject} addToFavorite={addToFavorite}></MovieCard>
            ))}
    </div>
  )
}
