import React from "react";
import "../../assets/style/Home.css";
import SliderMovie from "../../components/SliderMovie";
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export function Home({ addToFavorites }) {

  return (
    <>
      <Banner />
      <Section title={"Now Playing"}>
        <SliderMovie endpoint={"now_playing"}/>
      </Section>
      <Section title={"Popular"}>
        <SliderMovie endpoint={"popular"}/>
      </Section>
      <Section title={"Top Rated"}>
        <SliderMovie endpoint={"top_rated"}/>
      </Section>
      <Section title={"Upcoming"}>
        <SliderMovie endpoint={"upcoming"}/>
      </Section>
    </>
  );
}
