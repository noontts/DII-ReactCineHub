import React, { useState ,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Banner = ({className}) => {
    const imgPath = "https://image.tmdb.org/t/p/original";
 
   
  return (
    <>
        <div className={className}>

            <div className='left-content'>
           
                <h1>Moive title of Top Rate</h1>
                <p>essay, an analytic, interpretative, or critical literary composition usually much shorter and less systematic and formal </p>
                <button className='button-explore-more'>Explore More!</button>
            </div>
        
            <div className='right-content' >
                <img src=''/>
            </div>

        </div>
    </>
    
  )
}

export default styled(Banner)`
    display: flex;
    height: 300px;
    width: 1000px;
    border-radius: 30px;
    background: #A1E533;
    padding: 40px;
    position: relative;
    margin-bottom: 15px;
    animation: ease-in-out 4s;

h1{
    font-weight: bolder;
}

p {
    width: 80%;
    font-weight: 1000;
}
.right-content{
    height: 300px;
}
img{
    height: 100%;
    border-radius: 20px;
    border: 1px solid #000;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.button-explore-more{
    width: 280px;
    height: 75px;
    border-radius: 15px;
    background: #000;
    color: white;
    font-size: 1.2em;
    font-weight: bolder;
    position: absolute; /* Position the button absolutely within the container */
    bottom: 40px; 
    left: 40px;
    
}
.button-explore-more:hover{
    cursor: pointer;
    color: violet;
}
`