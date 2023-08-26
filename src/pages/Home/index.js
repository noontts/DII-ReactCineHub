import React,{ useState } from "react";
import "../../assets/style/Home.css";
import { SliderMovie } from "../../components/SliderMovie";
import { SearchResultsList } from "../../components/SearchBar/SearchResultsList"
import { SearchBar } from "../../components/SearchBar";
import { Banner } from "../../components/Banner";
import Section from "../../components/Section";
export function Home() {

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="search-bar-container">
          <SearchBar setResults = {setResults}/>
          <SearchResultsList results = {results}/>
      </div>
      <Banner />
      <Section title={"Now Playing"}>
        <SliderMovie endpoint={"now_playing"} />
      </Section>
      <Section title={"Popular"}>
        <SliderMovie endpoint={"popular"} />
      </Section>
      <Section title={"Top Rated"}>
        <SliderMovie endpoint={"top_rated"} />
      </Section>
      <Section title={"Upcoming"}>
        <SliderMovie endpoint={"upcoming"} />
      </Section>
    </>
  );
}
