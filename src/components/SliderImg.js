import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { getMovieImages } from '../services/movieapi';
import '../assets/style/Slider.css';

export const SliderImg = ({ movieID, className }) => {
  const [images, setImages] = useState([]);
  const websitePath = 'https://image.tmdb.org/t/p/original';

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getMovieImages(movieID);
        setImages(result.backdrops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromApi();
  }, [movieID]);


  if(images.length == 0){
    return <div>No Images</div>
  }
  return (
    <Slider className={className} {...settings} >
      {images.map((image, index) => (
        <img
          src={`${websitePath}${image.file_path}`}
          alt={`Movie ${movieID} Backdrop ${index}`}
          key={image.file_path}
        />
      ))}
    </Slider>
  );
};

export default styled(SliderImg)`
@import "slick-carousel/slick/slick.css"; 
@import "slick-carousel/slick/slick-theme.css";

width: 1300px;
margin-left: 50px;
margin-top: 20px;

.slick-prev, .slick-next{
    top: 45%;
}

`;