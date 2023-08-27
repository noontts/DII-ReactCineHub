import React from 'react'
import styled from 'styled-components';

export const MovieDetailCard = ({ MovieObject, className }) => {
  return (
    <div className={className}>
        <div className='title-movie'>The Godfather(1921)</div>
        <div className='average'>
            <p>Average rating</p>
            <div className='average-score'>
                <p className='score'>4/5</p>
                <p>Logo</p>
            </div>
        </div>

        <div className='overview'>
            <p className='overview-big'>Overview</p>
            <p className='overview-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
    </div>
  )
}

export default styled(MovieDetailCard)`
    width: 1400px;
    height: 600px;
    background-color: white;
`
