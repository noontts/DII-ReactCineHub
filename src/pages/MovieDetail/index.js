import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail } from "../../services/movieapi";
import MovieDetailCard from "../../components/MovieDetailCard";

const MovieDetail = () => {
  const [data, setData] = useState({});
  const movieId = useParams();

  return (
    <>
      <div>MovieDetail</div>
      <MovieDetailCard movieID={movieId.id}/>
    </>
  );
};

export default styled(MovieDetail)``;
