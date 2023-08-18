import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/style/Home.css"
import Slider from "react-slick";
import { MovieCard } from '../components/MovieCard'
import { fetchData } from "../services/movieapi";


export function SliderMovie({endpoint, page}){
    const [data , setData] = useState([]);
    
    useEffect(()=>{
        const fetchDataFromApi = async() =>{
            try {
                const result = await fetchData(endpoint, page);
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
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return(
        <Slider className="custom-slider" {...settings}>
                {data.map((movie)=>(
                <MovieCard key={movie.id} movieObject={movie}/>
            ))}
        </Slider>
    );
}