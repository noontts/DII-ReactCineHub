import React from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import cinihubbro from '../LogoCard/Potter.jpg'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export function Banner({className}) {
  
  return (
    <>
   
    <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={className}
      >
        <SwiperSlide>
          <div className='banner-content'>
              <div className='left-content'>
                  <h1>MOST START FOREVER</h1>
                  <p className='para-defined'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <button className='button-explore-more'>Explore more</button>
              </div>
                  <div className='right-content'>
                  <img src={cinihubbro}alt='' />
              </div>
          </div>
        
       
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-content'>
              <div className='left-content'>
                  <h1>Most Make Money Ever</h1>
                  <p className='para-defined'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <button className='button-explore-more'>Explore more</button>
              </div>
                  <div className='right-content'>
                  <img src={cinihubbro}alt='' />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='banner-content'>
              <div className='left-content'>
                  <h1>Best Movie In 2023</h1>
                  <p className='para-defined'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <button className='button-explore-more'>Explore more</button>
              </div>
                  <div className='right-content'>
                  <img src={cinihubbro} alt='' />
              </div>
          </div>
          </SwiperSlide>
      
      </Swiper>
    
      
    </>
  );
}

export default styled(Banner)`
    display: flex;
    height: 350px;
    width: 1000px;
    border-radius: 30px;
    background: #A1E533;
    position: relative;
    margin-bottom: 15px;
    animation: ease-in-out 4s;
    margin: 10px;
.banner-content{
  display: flex;
  padding: 20px;
}
.left-content{
  display: flex;
  flex-direction: column;
 
  
}
  p {
    width: 80%;

    font-weight: 1000;
}
.right-content{
    height: 300px;
}
img{
    right: 0;
    height: 300px;
    border-radius: 20px;
    border: 1px solid #000;
    width: 350px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    object-fit: fill;
}



/* Optional: Center the Swiper */
/* .swiper-container {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.button-explore-more{
    width: 280px;
    height: 75px;
    border-radius: 15px;
    background: #000;
    color: white;
    font-size: 1.2em;
    font-weight: bolder;
     /* Position the button absolutely within the container */
    bottom: 40px; 
    left: 40px;
    
}
.button-explore-more:hover{
    cursor: pointer;
    color: violet;
}
`