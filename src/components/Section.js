import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = ({ title, children, haveLink = false, link, className }) => {
  return (
    <div className={className}>
      <div className="title-section">
        <div className="title-divider"></div>
        <h3 className="title-text">{title}</h3>
        {haveLink && (
          <div className="more-link-container">
            <Link to={`${link}/1`} className="more-link">
              SEE MORE
              <box-icon name="chevron-right" color="white" size="md"></box-icon>
            </Link>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default styled(Section)`
  .title-section {
    display: flex;
    height: 25px;
    margin-top: 10px;
    align-items: center;
    position: relative;
  }

  .title-divider {
    width: 4px;
    height: 100%;
    background-color: #a1e533;
    margin-left: 50px;
    border-radius: 10px;
  }

  .title-text {
    color: white;
    margin: 15px 0 10px 0;
    font-size: 25px;
    position: absolute;
    left: 65px;
    top: -21px;
  }

  .more-link-container {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .more-link {
    display: flex;
    align-items: center;
    color: gray;
    text-decoration: none;
    font-size: 20px;
  }

  .more-icon {
    margin-left: 5px;
    transition: transform 0.3s ease-in-out;
  }
  .more-link:hover {
    color: white;
  }
`;
