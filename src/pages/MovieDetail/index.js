import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section"
import { getMovieDetail } from "../../services/movieapi";
import MovieDetailCard from "../../components/MovieDetailCard";
import { SliderMovie } from "../../components/SliderMovie";

const MovieDetail = () => {
  const [data, setData] = useState({});
  const movieId = useParams();
  
  return (
    <>
      <MovieDetailCard movieID={movieId.id}/>
      <Section title={'Recommended'}>
        <SliderMovie endpoint={'recommend'} movieID={movieId.id}/>
      </Section>
    </>
  );
};

export default styled(MovieDetail)``;
