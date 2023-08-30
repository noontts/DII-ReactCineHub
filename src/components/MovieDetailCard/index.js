import React, { useEffect, useState } from "react";
import { getMovieDetail } from "../../services/movieapi";
import MovieDetailLoad from "./MovieDetailLoad";
import styled from "styled-components";

export const MovieDetailCard = ({ movieID, className }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const imgPath = "https://image.tmdb.org/t/p/original";
  let movieGenre = <p>No genres available</p>;

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getMovieDetail(movieID);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setIsLoading(true);
    fetchDataFromApi();
  }, [movieID]);

  const imgPosterPath = `${imgPath}/${data.poster_path}`;
  const imgBackDropPath = `${imgPath}/${data.backdrop_path}`;

  if (data.genres && data.genres.length > 0) {
    movieGenre = data.genres.map((genre, index) => (
      <span className="span-genres" key={index}>
        {genre.name}
      </span>
    ));
  }

  if (isLoading) {
    return (
      <MovieDetailLoad/>
    );
  }

  return (
    <div className={className}>
      <div className="back-drop">
        <img src={imgBackDropPath} alt="back-drop"/>
      </div>
      <div className="img-poster">
        <img src={imgPosterPath} alt="poster"/>
      </div>
      <div className="detail">
        <div className="title-movie">
          {data.title}({data.release_date.split("-")[0]})
        </div>
        <div className="genres-container">{movieGenre}</div>
        <div className="average">
          <p className="head-average">Average rating</p>
          <div className="average-score">
            <p className="score">{data.vote_average}/10</p>
            <box-icon type="solid" name="star" color="#f2b01e" size="sm" />
          </div>
        </div>

        <div className="overview">
          <p className="overview-big">Overview</p>
          <p className="overview-text">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default styled(MovieDetailCard)`
  height: 600px;
  background-color: white;
  background-size: cover;
  display: flex;
  padding: 30px;
  position: relative;
  overflow: hidden;
  background-color: black;
  color: white;

  .back-drop img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    opacity: 0.2;
  }

  .img-poster {
    margin-left: 200px;
    z-index: 1;
  }
  .img-poster img {
    width: 370px;
    border-radius: 15px;
    height: auto;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
      2px 3px 7px 0px rgba(0, 0, 0, 0.2), 6px 10px 12px 0px rgba(0, 0, 0, 0.17),
      14px 23px 16px 0px rgba(0, 0, 0, 0.1),
      24px 42px 19px 0px rgba(0, 0, 0, 0.03),
      38px 65px 21px 0px rgba(0, 0, 0, 0);
  }

  .detail {
    margin-left: 50px;
    padding: 20px;
    z-index: 1;
  }

  .title-movie {
    font-size: 35px;
  }
  .genres-container {
    margin-top: 20px;
  }
  .span-genres {
    background-color: #d9d9d9;
    width: 50px;
    height: 16px;
    border-radius: 15px;
    color: #000;
    padding: 5px 10px 5px 10px;
    margin-right: 5px;
    font-size: 14px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
      2px 3px 7px 0px rgba(0, 0, 0, 0.2), 6px 10px 12px 0px rgba(0, 0, 0, 0.17),
      14px 23px 16px 0px rgba(0, 0, 0, 0.1),
      24px 42px 19px 0px rgba(0, 0, 0, 0.03),
      38px 65px 21px 0px rgba(0, 0, 0, 0);
  }
  .head-average {
    font-size: 16px;
    margin: 0;
    margin-top: 30px;
  }
  .average-score {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .score {
    font-size: 25px;
    margin: 0;
  }
  .overview-big {
    font-size: 25px;
    margin-top: 35px;
  }
`;
