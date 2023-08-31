import React,{ useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section"
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";
import { CommentDisplay } from "../../components/CommentDisplay"

const MovieDetail = () => {
  const movieId = useParams();
  const [isHaveImg, setIsHaveImg] = useState(false);
  
  return (
    <>
      <MovieDetailCard movieID={movieId.id}/>

      {!isHaveImg &&
        <Section title={'Gallery'}>
          <SliderImg movieID={movieId.id} setIsHaveImg={setIsHaveImg} />
        </Section>
      }
      
      <Section title={'Recommended'}>
        <SliderMovie endpoint={'recommend'} movieID={movieId.id}/>
      </Section>

      <CommentDisplay/>
    </>
  );
};

export default styled(MovieDetail)``;
