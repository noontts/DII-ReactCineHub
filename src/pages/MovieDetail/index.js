import React,{ useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section"
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";
import CommentDisplay from "../../components/CommentDisplay"
import CommentInput from "../../components/CommentInput";

const MovieDetail = () => {
  const movieId = useParams();
  // const [isHaveImg, setIsHaveImg] = useState(true);

  return (
    <>
      <MovieDetailCard movieID={movieId.id}/>

      {/* {isHaveImg ?? */}
        <Section title={'Gallery'}>
          <SliderImg movieID={movieId.id} />
        </Section>
      
      <Section title={'Recommended'}>
        <SliderMovie endpoint={'recommend'} movieID={movieId.id}/>
      </Section>

      <CommentInput />
      <CommentDisplay/>
    </>
  );
};

export default styled(MovieDetail)``;
