import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section"
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";

const MovieDetail = () => {
  const movieId = useParams();
  
  return (
    <>
      <MovieDetailCard movieID={movieId.id}/>

      <Section title={'Gallery'}>
        <SliderImg movieID={movieId.id}/>
      </Section>

      <Section title={'Recommended'}>
        <SliderMovie endpoint={'recommend'} movieID={movieId.id}/>
      </Section>
    </>
  );
};

export default styled(MovieDetail)``;
