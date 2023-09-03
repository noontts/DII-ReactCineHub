import React, { useState } from "react";
import styled from "styled-components";
import { newComment } from "../../services/commentsapi";
import PropTypes from 'prop-types';

export const CommentInput = ({ className, movie_id, onNewComment }) => {
  const [comments, setComments] = useState("");

  const handleInputChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the comment and get the new comment data
      if(comments == ''){

      }
      else{
        const newCommentData = await newComment(`${movie_id}`, comments);
        onNewComment(newCommentData);
        setComments("");
      }
      // Call the onNewComment callback to update the comments in the parent component
      

      // Clear the input field
      
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <div className={className}>
        <div className="Comment">
          <h1>Comment</h1>
          <form onSubmit={handleSubmit}>
            <textarea value={comments} onChange={handleInputChange} />
            <button type="submit">POST</button>
          </form>
        </div>
      </div>
    </>
  );
};


CommentInput.propTypes = {
  className : PropTypes.string,
  movie_id : PropTypes.string.isRequired,
  onNewComment : PropTypes.func.isRequired
}

export default styled(CommentInput)`
  .Comment form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  .Comment h1 {
    color: white;
  }

  .Comment textarea {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #0000;
    height: 120px;
    width: 1200px;
    border-radius: 7px;
    font-size: 17px;
    resize: none;
  }
  .Comment button {
    margin-top: 20px;
    border: none;
    outline: none;
    background: #a1e533;
    padding: 10px 40px;
    font-size: 20px;
    font-weight: 1000;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);

    transition: all ease 0.1s;
    box-shadow: 0px 5px 0px 0px #c1f4d2;
  }

  .Comment button:hover{
    background-color: #b3ff3a;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);

    transition: 100ms;
  }


  .Comment button:active {
    background: #a1e533;
    transform: translateY(5px);
    color: black;
    box-shadow: 0px 0px 0px 0px #c1f4d2;
  }
`;
