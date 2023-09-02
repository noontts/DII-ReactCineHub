import React, { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { fetchData } from '../../services/movieapi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

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
        modules={[Pagination, Navigation]}
        className={className} 
      >
        <SwiperSlide >
          <div className='banner-content'style={{ backgroundImage: `url(${backgroundpath}${data[0].backdrop_path})`,opacity:`0.9` }} >
              <div className='left-content'>
                  <h1>{data[0].original_title}</h1>
                  <p className='para-defined'>{data[0].overview}</p>
                  <button className='button-explore-more'>Explore more...</button>
              </div>
                  
                  <h2>#<span className='spaning'>1</span></h2>

          
          </div>
        
       
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-content' style={{ backgroundImage: `url(${backgroundpath}${data[1].backdrop_path})`,opacity:`0.9` }} >
              <div className='left-content'>
                  <h1>{data[1].original_title}</h1>
                  <p className='para-defined'>{data[1].overview}</p>
                  <button className='button-explore-more'>Explore more...</button>
              </div>
                  <div className='right-content'>
                  <h2>#<span className='spaning'>2</span></h2>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='banner-content' style={{ backgroundImage: `url(${backgroundpath}${data[2].backdrop_path})`,opacity:`0.9` }} >
              <div className='left-content'>
                  <h1>{data[2].original_title}</h1>
                  <p className='para-defined'>{data[2].overview}</p>
                  <button className='button-explore-more'>Explore more...</button>
              </div>
                  <div className='right-content'>
                  <h2>#<span className='spaning'>3</span></h2>
              </div>
          </div>
          </SwiperSlide>
      
      </Swiper>
    
      
    </>
  );
}

export default styled(Banner)`
    display: flex;
    height: 500px;
    width: 1400px;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
}
  p {
    width: 80%;

    font-weight: 1000;
}
.right-content{
    height: 300px;
    right: 45px;
    position: absolute;
}
h2{
  position: absolute;
  right: 0;
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



/* Optional: Center the Swiper */
/* .swiper-container {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.button-explore-more{
    width: 200px;
    height: 65px;
    border-radius: 15px;
    background: #000 ;
    text-shadow: 0px 4px 4px #000;
    color: #A1E533;
    font-size: 1.2em;
    font-weight: bolder;
    margin-top: 30px;
    border: 1px solid #A1E533;
    
}
.button-explore-more:hover{
    cursor: pointer;
    /* color: #A1E533; */
    color: black;
    transition: 2s;
    text-shadow:none;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(226,233,241,1) 100%);
    background-color: aliceblue;
}
`