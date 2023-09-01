import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const MovieDetailLoad = ({ className }) => {
  return (
    <div className={className}>
       <box-icon name='radio-circle' animation='burst' color='white' size='lg'></box-icon>
    </div>
  );
};
export default styled(MovieDetailLoad)`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: black;
  color: white;
`;

MovieDetailLoad.propTypes = {
  className : PropTypes.string
}
