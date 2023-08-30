import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MovieCard from '../components/MovieCard'
import { fetchData } from "../services/movieapi";


function SliderMovie({endpoint, page, movieID , className}){
    const [data , setData] = useState([]);
    
    useEffect(()=>{
        const fetchDataFromApi = async() =>{
            try {
                const result = await fetchData(endpoint, page ,movieID);
                setData(result.results);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        }
        fetchDataFromApi();
    },[endpoint, page]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };

    return(
        <Slider className={className} {...settings}>
                {data.map((movie)=>(
                <MovieCard key={movie.id} movieObject={movie}/>
            ))}
        </Slider>
    );
}

export default styled(SliderMovie)`

@import "slick-carousel/slick/slick.css"; 
@import "slick-carousel/slick/slick-theme.css";

width: 1300px;
margin-left: 50px;

.slick-list{
    height: 550px;
}
.slick-prev, .slick-next{
    top: 45%;
}
`;