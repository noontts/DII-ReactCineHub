import React from "react";
import "../../assets/style/Home.css";
import SliderMovie from "../../components/SliderMovie";
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export function Home() {

  return (
    <>
      <Banner />
      <Section title={"Now Playing"} haveLink={true} link={'now-playing'}>
        <SliderMovie endpoint={"now_playing"} />
      </Section>
      <Section title={"Popular"} haveLink={true} link={'popular'}>
        <SliderMovie endpoint={"popular"}/>
      </Section>
      <Section title={"Top Rated"} haveLink={true} link={'top-rate'}>
        <SliderMovie endpoint={"top_rated"}/>
      </Section>
      <Section title={"Upcoming"} haveLink={true} link={'upcoming'}>
        <SliderMovie endpoint={"upcoming"}/>
      </Section>
    </>
  );
}
