import React from "react";
import "./CommentInput.css";
import styled from "styled-components";
export const CommentInput = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="Comment">
          <h1>Comment</h1>
          <textarea />
          <button type='submit'>POST</button>
        </div>
      </div>
    </>
  );
};
export default styled(CommentInput)`
  .Comment {
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
    border: 1px solid #0000;
    height: 120px;
    width: 1250px;
    border-radius: 7px;
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
