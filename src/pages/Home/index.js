import React, { useState }from "react";
import "../../assets/style/Home.css";
import { SliderMovie } from "../../components/SliderMovie";
import { SearchBar } from "../../components/SearchBar";
import { Banner } from "../../components/Banner";
import Section from "../../components/Section";


export function Home() {

  const [favoriteMovie,setFavoriteMovie] = useState([]);

  const addToFavorites = (isFavorite, movieObj) => {
    if (!isFavorite) {
      removeFromFavorites(movieObj);
    } else {
      addMovieToFavorites(movieObj);
    }
  };

    const addMovieToFavorites = (movieObj) => {
      if (!favoriteMovie.some(movie => movie.id === movieObj.id)) {
        setFavoriteMovie((prevFavorites) => [...prevFavorites, movieObj]);
        console.log(`${movieObj.id} is Add!`);
      }
    };
  
    const removeFromFavorites = (movieObj) => {
      setFavoriteMovie((prevFavorites) =>
        prevFavorites.filter((favoriteMovie) => favoriteMovie.id !== movieObj.id)
      );
      console.log(`${movieObj.id} is Delete!`)
    };

    console.log("Updated favoriteMovie:", favoriteMovie);

  return (
    <>
      <SearchBar />
      <Banner />
      <Section title={"Now Playing"}>
        <SliderMovie endpoint={"now_playing"} onAddToFavorite={addToFavorites}/>
      </Section>
      <Section title={"Popular"}>
        <SliderMovie endpoint={"popular"} onAddToFavorite={addToFavorites}/>
      </Section>
      <Section title={"Top Rated"}>
        <SliderMovie endpoint={"top_rated"} onAddToFavorite={addToFavorites}/>
      </Section>
      <Section title={"Upcoming"}>
        <SliderMovie endpoint={"upcoming"} onAddToFavorite={addToFavorites}/>
      </Section>
    </>
  );
}
