import React from 'react';
import Proptype from 'prop-types';
import "./SearchBar.css";


export const SearchResult = ({result}) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const imgMovie = `${imgPath}/${result.poster_path}`;
  
  return (
    <div className='search-result'>

      <img src={imgMovie}></img>
      <div className="title-movie">
        <h3>{result.title}</h3>
        <p>{result.release_date}</p>
      </div>
     
     
      </div>
  )

}

SearchResult.prototype = {
  result: Proptype.object.isRequired
}
