import React, { useEffect, useState } from "react";
import { getMovieDetail } from "../../services/movieapi";
import styled from "styled-components";

export const MovieDetailCard = ({ movieID, className }) => {
  const [data, setData] = useState({});
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getMovieDetail(movieID);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromApi();
  }, []);

  const imgPosterPath = `${imgPath}/${data.poster_path}`;
  const imgBackDropPath = `${imgPath}/${data.backdrop_path}`;

  return (
    <div className={className}>
        <div className="back-drop"><img src={imgBackDropPath} /></div>
      
      <div className="img-poster">
        <img src={imgPosterPath} />
      </div>
      <div className="detail">
        <div className="title-movie">
          {data.title}({data.release_date})
        </div>
        <div className="average">
          <p>Average rating</p>
          <div className="average-score">
            <p className="score">{data.vote_average}/10</p>
            <p>Logo</p>
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
  width: 1400px;
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
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.20), 2px 3px 7px 0px rgba(0, 0, 0, 0.20), 6px 10px 12px 0px rgba(0, 0, 0, 0.17), 14px 23px 16px 0px rgba(0, 0, 0, 0.10), 24px 42px 19px 0px rgba(0, 0, 0, 0.03), 38px 65px 21px 0px rgba(0, 0, 0, 0.00);
  }

  .detail {
    margin-left: 50px;
    z-index: 1;
  }

  .title-movie{
    font-size: 35px;
  }
`;
