import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section";
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";
import { CommentDisplay } from "../../components/CommentDisplay";
import CommentInput from "../../components/CommentInput";
import { fetchComment } from "../../services/commentsapi";

const MovieDetail = () => {
  const movieIdParams = useParams();
  const [comment, setComment] = useState([]);
  let commentDisplay;

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const result = await fetchComment(movieIdParams.id); // Use movieIdParams.id directly
        console.log(result.comments);
        setComment(result.comments);
      } catch (error) {
        console.error("Error fetching data:", error);
        setComment([]);
      }
    };
    fetchCommentData();
  }, [movieIdParams.id]);

  if (comment.length > 0) {
    commentDisplay = comment.map((commentData, index) => (
      <CommentDisplay key={index} comment={commentData} />
    ));
  }

  return (
    <>
      <MovieDetailCard movieID={movieIdParams.id} />

      {/* {isHaveImg ?? */}
      <Section title={"Gallery"}>
        <SliderImg movieID={movieIdParams.id} />
      </Section>

      <Section title={"Recommended"}>
        <SliderMovie endpoint={"recommend"} movieID={movieIdParams.id} />
      </Section>

      <CommentInput />
      {commentDisplay}
    </>
  );
};

export default styled(MovieDetail)``;
