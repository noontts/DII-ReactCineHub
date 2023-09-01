import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section";
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";
import CommentDisplay from "../../components/CommentDisplay";
import CommentInput from "../../components/CommentInput";
import { fetchComment, createNewMovie } from "../../services/commentsapi";

const MovieDetail = () => {
  let commentDisplay;
  const movieIdParams = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const result = await fetchComment(movieIdParams.id);
        setComments(result.comments);
      } catch (error) {
        console.error("Error fetching data:", error);
        setComments([]);
      }
    };
    fetchCommentData();
  }, [movieIdParams.id]);

  const handleNewComment = (newCommentData) => {
    // Update the comments state with the new comment
    setComments([...comments, newCommentData]);
  };

  if (comments.length > 0) {
    commentDisplay = comments.map((commentData, index) => (
      <CommentDisplay key={index} comment={commentData} />
    ));
  }

  return (
    <>
      <MovieDetailCard movieID={movieIdParams.id} />

      <Section title={"Gallery"}>
        <SliderImg movieID={movieIdParams.id} />
      </Section>

      <Section title={"Recommended"}>
        <SliderMovie endpoint={"recommend"} movieID={movieIdParams.id} />
      </Section>

      <CommentInput movie_id={movieIdParams.id} onNewComment={handleNewComment} />
      {commentDisplay}
    </>
  );
};

export default styled(MovieDetail)``;
