import React from 'react'
import MovieCard from '../../components/MovieCard'
import { useFavorites } from "../../components/FavoritesContext";
import Section from "../../components/Section"
export const FavoritePage = () => {
  
  const { favoriteMovie } = useFavorites();


  if(favoriteMovie.length === 0){
    return <div>Not Have</div>
  }

  return (
    <Section title={'Favorite Movies'}>
      <div style={{display: 'grid' , gridTemplateColumns: 'auto auto auto auto auto',columnGap: '35px'}}>
              {favoriteMovie.map((movieObject)=>(
                  <MovieCard key={movieObject.id} movieObject={movieObject}></MovieCard>
              ))}
      </div>
    </Section>
  )
}
