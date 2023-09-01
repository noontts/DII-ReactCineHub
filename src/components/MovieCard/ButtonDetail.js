import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

function ButtonDetail({ movieID, className }) {
  return (
    <div className={className}>
      <Link to={`/movie/${movieID}`} className="btn-detail">
        <span style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)" }}>
          Detail
        </span>
      </Link>
    </div>
  );
}

export default styled(ButtonDetail)`
  text-align: center;
  margin-top: 12px;
  display: flex;
  justify-content: center;

  .btn-detail {
    width: 120px;
    font-size: 12px;
    text-decoration: none;
    padding: 6px 22px;
    border-radius: 15px;
    background: #a1e533;
    color: #fff;
    font-weight: 700;
  }

  .btn-detail:hover {
    background-color: #ffffff;
    color: #a1e533;
  }
`;

ButtonDetail.propTypes = {
  movieID: PropTypes.number.isRequired,
  className: PropTypes.string,
};
