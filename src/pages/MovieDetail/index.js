import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import MovieDetailCard from '../../components/MovieDetailCard'

const MovieDetail = () => {

  const movieId = useParams();
  console.log(movieId.id);

  return (
    <>
    <div>MovieDetail</div>
    <MovieDetailCard/>
    </>
  );

}

export default styled(MovieDetail)`



`;