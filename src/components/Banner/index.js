import React, { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { fetchData } from '../../services/movieapi';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Banner({className}) {
  const [data, setData] = useState('');
  const [isloading , setloading] =useState(true);
  const backgroundpath = "https://image.tmdb.org/t/p/original/";
  
  useEffect(() => {
        const fetchTopRate = async() =>{
        const response = await fetchData('top_rated');
        
        setData(response.results);
        setloading(false);
        console.log(response);
      }
      fetchTopRate();
  },[])
  if(isloading){
    return <div>Loading...</div>
  }
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={className} 
      >
        <SwiperSlide >
          <div className='banner-content'style={{ backgroundImage: `url(${backgroundpath}${data[0].backdrop_path})`,opacity:`0.9`,backgroundBlendMode:`lighten` }} >
              <div className='left-content'>
                  <h1>{data[0].original_title}</h1>
                  <p className='para-defined'>{data[0].overview}</p>
                  <Link to={`/movie/${data[0].id}`} className='button-explore-more'>Explore more...</Link>
              </div>
                  
                  <h2>#<span className='spaning'>1</span></h2>

          
          </div>
        
       
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-content' style={{ backgroundImage: `url(${backgroundpath}${data[1].backdrop_path})`,opacity:`0.9` }} >
              <div className='left-content'>
                  <h1>{data[1].original_title}</h1>
                  <p className='para-defined'>{data[1].overview}</p>
                  <Link to={`/movie/${data[1].id}`} className='button-explore-more'>Explore more...</Link>
              </div>
                 
                  <h2>#<span className='spaning'>2</span></h2>
            
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='banner-content' style={{ backgroundImage: `url(${backgroundpath}${data[3].backdrop_path})`,opacity:`0.9` }} >
              <div className='left-content'>
                  <h1>{data[3].original_title}</h1>
                  <p className='para-defined'>{data[3].overview}</p>
                  <Link to={`/movie/${data[3].id}`} className='button-explore-more'>Explore more...</Link>
              </div>
                
                  <h2>#<span className='spaning'>3</span></h2>
             
          </div>
          </SwiperSlide>
      
      </Swiper>
    
      
    </>
  );
}

export default styled(Banner)`
    display: flex;
    height: 500px;
    width: 1250px;
    border-radius: 30px;
    position: relative;
    margin-bottom: 15px;
    animation: ease-in-out 4s;
    margin: 10px;
    color: white;
   
.banner-content{
  display: flex;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  
}

.banner-content:hover{
}

.left-content{
  display: flex;
  flex-direction: column;
  bottom: 40px;
  position: absolute;
  width: 100%;
  left: 60px;
  
}
h1{
  font-size: 50px;
  text-shadow: 4px 4px 4px #211f1f;
  color: #FFF;
}
p {
    width: 80%;
    text-shadow: 2px 2px 2px #211f1f;
    font-weight: 1000;
}

h2{
  position: absolute;
  right: 45px;
  font-size: 80px;
}
.spaning{
  color: #A1E533;
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
.button-explore-more{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 65px;
    border-radius: 15px;
    background: #000 ;
    text-shadow: 0px 4px 4px #000;
    color: #A1E533;
    font-size: 22px;
    font-weight: bolder;
    margin-top: 30px;
    border: 2px solid #A1E533;
    transition: 300ms;
    
}
.button-explore-more:hover{
    cursor: pointer;
    /* color: #A1E533; */
    color: #FFF;
    font-size: 22px;
    transition: 300ms;
    text-shadow:none;
    background: #A1E533;
    border: 2px solid #FFFF;
    text-shadow: 2px 2px 2px rgba(31, 31, 31, 0.3);
    box-shadow: inset 5px 5px 5px rgba(31, 31, 31, 0.3);
    /*background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(226,233,241,1) 100%);
    background-color: aliceblue; */
}
.swiper-button-prev{
  top: 22.5px;
  width: 50px;
  left: 0px;
  height: 100%;
  color: #A1E533;
  transition: 300ms;
}

.swiper-button-prev:hover{
  box-shadow: 0 0 200px rgba(0,0,0,0.3) inset;
  text-shadow: -10px 0px 1px rgba(255, 255, 255, 1);
  transition: 300ms;
}

.swiper-button-next{
  top: 22.5px;
  width: 50px;
  right: 0px;
  height: 100%;
  color: #A1E533;
  transition: 300ms;
}

.swiper-button-next:hover{
  box-shadow: 0 0 200px rgba(0,0,0,0.3) inset;
  text-shadow: 10px 0px 1px rgba(255, 255, 255, 1);
  transition: 300ms;
}

.swiper-pagination-bullet{
  color: white;
  background-color: #A1E533;
}
`