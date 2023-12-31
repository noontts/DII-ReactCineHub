import React from "react";
import PropTypes from "prop-types";

export function HoverContent({ movieObject, movieGenre}) {

  const titleStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4', /* Limit to 3 lines */
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: "20px",
    marginTop:'20px'
  }

  return (
    
    <div style={{ padding: "20px" }}>

      <div className="title" style={titleStyle}>
        {movieObject.title}
      </div>
      <div style={{ fontSize: "12px", marginTop: "21px" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", verticalAlign: "baseline" }}>
                Genre:
              </td>
              <td>{movieGenre}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Year:</td>
              <td>{movieObject.release_date.split("-")[0]}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Rating:</td>
              <td>{movieObject.vote_average}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

HoverContent.propTypes = {
  movieObject: PropTypes.object.isRequired,
  movieGenre: PropTypes.object.isRequired
};