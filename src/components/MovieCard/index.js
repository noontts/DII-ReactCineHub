import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import genreData from "../../assets/data/genre.json";
import { MovieYear } from "./MovieYear";
import { ButtonDetail } from "./ButtonDetail";
import { HoverContent } from "./HoverContent";

function getGenreNameById(genreId) {
  const genre = genreData.genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Unknown Genre";
}

function MovieCard({ movieObject, className }) {
  let imgPath = `https://image.tmdb.org/t/p/original${movieObject.poster_path}`;

  let movieGenre = (
    <>
      {movieObject.genre_ids === undefined ? (
        movieObject.genres.map((genre, index) => (
          <React.Fragment key={index}>
            {index !== 0 && ", "}
            <span>{genre.name}</span>
          </React.Fragment>
        ))
      ) : (
        movieObject.genre_ids.map((genreId, index) => (
          <React.Fragment key={genreId}>
            {index !== 0 && ", "}
            <span>{getGenreNameById(genreId)}</span>
          </React.Fragment>
        ))
      )}
    </>
  );

  if (!movieObject) {
    return <div>Loading...</div>;
  }

  //if movie don't have images
  if (movieObject.poster_path == null) {
    imgPath =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  }

  return (
    <div className={className}>
      <div
        className="movie-cover-img"
        style={{ backgroundImage: `url('${imgPath}')` }}
      >
        <div className="img-hover-content">
          <HoverContent movieObject={movieObject} movieGenre={movieGenre} />
        </div>
      </div>

      <div className="detail-container">
        <div className="flex-container">
          <MovieYear year={movieObject.release_date.split("-")[0]} />
          <div className="movie-rate">
            <span>{movieObject.vote_average}</span>
            <box-icon type="solid" name="star" color="#f2b01e" size="xs" />
          </div>
        </div>
        <div className="movie-title" style={{ marginTop: "5px" }}>
          {" "}
          {movieObject.title}{" "}
        </div>
        <div className="movie-genre">{movieGenre}</div>
        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonDetail movieID={movieObject.id} />
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movieObject: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(MovieCard)`
    margin-top: 15px;
    width: 222px;
    height: 500px;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    background-color: #211f1f;
    border-radius: 15px;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))
      drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.2))
      drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.17))
      drop-shadow(10px 17px 12px rgba(0, 0, 0, 0.1))
      drop-shadow(17px 30px 14px rgba(0, 0, 0, 0.03))
      drop-shadow(27px 46px 15px rgba(0, 0, 0, 0));

  .movie-cover-img {
    width: 100%;
    height: 328px;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
  }
  .img-hover-content {
    width: 100%;
    height: 328px;
    top: 0;
    right: 0;
    position: absolute;
    background: #211f1f;
    backdrop-filter: blur(3px);
    border-radius: 15px;
  }
  .movie-cover-img .img-hover-content {
    opacity: 0;
    transition: opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .movie-cover-img:hover .img-hover-content {
    opacity: 1;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    font-weight: ExtraBold;
    align-items: center;
  }
  .detail-container {
    height: 150px;
    padding: 14px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .movie-rate {
    font-size: 12px;
  }
  .movie-title {
    font-size: 16px;
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movie-genre {
    font-size: 10px;
  }

  .hover-content {
    position: absolute;
  }
`;
