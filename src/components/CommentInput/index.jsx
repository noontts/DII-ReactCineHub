import React, { useState } from "react";
import "./CommentInput.css";
import styled from "styled-components";
import { newComment } from "../../services/commentsapi";
export const CommentInput = ({ className, movie_id, onNewComment }) => {
  const [comments, setComments] = useState("");
  

  const handleInputChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the comment and get the new comment data
      const newCommentData = await newComment(`${movie_id}`, comments)
      
      // Call the onNewComment callback to update the comments in the parent component
      onNewComment(newCommentData);

      // Clear the input field
      setComments("");
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
            <textarea
              value={comments}
              onChange={handleInputChange}
            />
            <button type="submit">POST</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default styled(CommentInput)`
  .Comment form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
   
  }
  
  .Comment h1 {
    color: white;
  }

  .Comment textarea{
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #0000;
    height: 120px;
    width: 1200px;
    border-radius: 7px;
    font-size: 17px;
  }
  .Comment button{
    margin-top: 20px;
    border: none;
    outline: none;
    background: #A1E533;
    padding: 10px 40px;
    font-size: 20px;
    font-weight: 1000;
    color: #fff;
    border-radius: 5px;
  
    transition: all ease 0.1s;
    box-shadow: 0px 5px 0px 0px #c1f4d2;
  }
  .Comment button:active {
    transform: translateY(5px);
    color: black;
    box-shadow: 0px 0px 0px 0px #c1f4d2;
  }
`
