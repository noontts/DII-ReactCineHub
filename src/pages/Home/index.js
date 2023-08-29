
import React, { useState }from "react";
import "../../assets/style/Home.css";
import { SliderMovie } from "../../components/SliderMovie";
import { SearchResultsList } from "../../components/SearchBar/SearchResultsList"
import { SearchBar } from "../../components/SearchBar";
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export function Home({ addToFavorites }) {

  return (
    <>
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
