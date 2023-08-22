import React from "react";
import { FavoriteButton } from "./FavoriteButton";

export function HoverContent({ movieObject, movieGenre, addToFavorite }) {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{textAlign:'right'}}>
        <FavoriteButton addToFavorite = {addToFavorite} movieObject = {movieObject}/>
      </div>

      <div className="title" style={{ fontSize: "20px" ,marginTop:'10px'}}>
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
