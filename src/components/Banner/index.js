import React from 'react';
import "./Banner.css";

export const Banner = () => {
  return (
    <>
        <div className='Banner-Container'>

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
