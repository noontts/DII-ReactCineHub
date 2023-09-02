import React from "react";
import styled from "styled-components";
import imgRobot from "../LogoCard/robot logo.png";
import PropTypes from 'prop-types';

export const Footer = ({ className }) => {

  return (
    <div className={className}>
      <div className="footer-container">
        <div className="logo__footer">
          <img src={imgRobot} alt="robot-logoo" />
          <h1 style={{ color: "white" }}>CINEHUB</h1>
        </div>

        <ul>
          <a
            href="https://github.com/noontts/DII-ReactCineHub"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <box-icon
                type="logo"
                name="github"
                color="white"
                size="md"
              ></box-icon>
            </li>
          </a>
          <a
            href="https://www.facebook.com/nuddanai.klaiklin.1/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <box-icon
                type="logo"
                name="facebook-circle"
                color="white"
                size="md"
              ></box-icon>
            </li>
          </a>
          <a
            href="https://www.instagram.com/potterpurpp/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <box-icon
                name="instagram-alt"
                type="logo"
                color="white"
                size="md"
              ></box-icon>
            </li>
          </a>
          <a
            href="https://www.youtube.com/channel/UCjIFqYlR4-pwDH2WEPXaK3w"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <box-icon
                type="logo"
                name="youtube"
                color="white"
                size="md"
              ></box-icon>
            </li>
          </a>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright@ 2023 designed by CINEHUB</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className : PropTypes.string
}

export default styled(Footer)`
  position: relative;
  background-color: black;

  .footer-container {
    padding-top: 30px;
  }

  .copyright {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: #a6a6a6;
  }
  .copyright p {
    font-size: 12px;
  }

  & ul {
    margin-top: 30px;
    list-style: none;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  & li {
    padding: 50px 30px;
  }
  .logo__footer {
    position: absolute;
    left: 43%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
