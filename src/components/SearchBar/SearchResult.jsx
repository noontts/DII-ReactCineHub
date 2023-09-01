import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const SearchResult = ({result,className, setResults}) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const imgMovie = `${imgPath}/${result.poster_path}`;
  const valueInput = document.getElementById('searchbar');
  
  return (
    <Link className={className} to={`/movie/${result.id}`} onClick={(e) => {
      valueInput.value = ' ';
      setResults([]);
    }}>

      <img src={imgMovie}></img>
      <div className="title-movie">
        <h3>{result.title}</h3>
        <p>{result.release_date}</p>
      </div>
     
     
      </Link>
  )

}


SearchResult.prototype = {
  result: PropTypes.array.isRequired
}


export default styled(SearchResult)`
  text-decoration: none;
  color: black;
    display: flex;
  padding: 10px 20px;
img {
  height: 100px;
  width: 80px;
  object-fit: cover;
}
.title-movie {
 width: 100%;
  margin-left: 20px;
}
.title-movie p {
  font-weight: lighter;
  color: #5f5e5e;
}
&:hover{
  background-color: #efefef;
  
}
`

