import React from 'react';
import styled from 'styled-components';

const Banner = ({className}) => {
  return (
    <>
        <div className={className}>

            <div className='left-content'>
                <h1>Moive title of Top Rate</h1>
                <p>essay, an analytic, interpretative, or critical literary composition usually much shorter and less systematic and formal </p>
                <button className='button-explore-more'>Explore More!</button>
            </div>
        
            <div className='right-content' >
                <img src='https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/357802242_786894462929162_7995416220898774569_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFKuTnEd4xma1Wxcw6yFcXEqISRaRtp5AeohJFpG2nkB6mOTBJ-WImkQcCoIw22AAFD21AFyz8neHY4aaSTDWL3&_nc_ohc=S6O5xoxk0r4AX978CCa&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfCpYw1gbDD2FcBhPXxxvH0tLCotdC9mF5FXTk02FFgHhg&oe=64E6817F'/>
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