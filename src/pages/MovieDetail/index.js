import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Section from "../../components/Section";
import MovieDetailCard from "../../components/MovieDetailCard";
import SliderMovie from "../../components/SliderMovie";
import SliderImg from "../../components/SliderImg";
import CommentDisplay from "../../components/CommentDisplay";
import CommentInput from "../../components/CommentInput";
import { fetchComment , deleteComment } from "../../services/commentsapi";

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

   const handleDeleteComment = async (movie_id, comment_id) => {
    try {
      // Delete the comment
      await deleteComment(movie_id, comment_id);

      const updatedComments = await fetchComment(movie_id);
      setComments(updatedComments.comments);

    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleNewComment = (newCommentData) => {
    // Update the comments state with the new comment
    setComments([newCommentData,...comments]);
  };

  if (comments.length > 0) {
    console.log(comments);
    commentDisplay = comments.map((commentData) => (
      <CommentDisplay key={commentData.commentID} comment={commentData} movie_id={movieIdParams.id} comment_id={commentData.commentID} onDelete={handleDeleteComment} />
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
