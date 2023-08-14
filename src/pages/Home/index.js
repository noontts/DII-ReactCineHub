import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from '../../components/MovieCard'

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJiNWQzNjRjY2MzMmQ5ODRjM2Q4NTI5MGU2ZGZjOSIsInN1YiI6IjY0Y2Y4OWMwNmQ0Yzk3MDEwZDUwZjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm1Hv-FSpnaTxldJLTyCVurnBePOyv3cgci5taDUjKk'
    }
  };


export function Home(){

    const [movieData, setMovieData] = useState([]);

    useEffect(()=>{

        const fetchMovie = async() =>{
            const res = await axios.request(options);
            setMovieData(res.data.results);
        };

        console.log(movieData);
        fetchMovie();

    },[]);

    return (
        <MovieCard movieObject={movieData[0]}/>
    );
}