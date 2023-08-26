import React,{useState} from 'react';
import "./SearchBar.css";


export const SearchResult = ({result}) => {
  const [imgPath, setImgPath] = useState("https://image.tmdb.org/t/p/original");

  const imgMovie = `${imgPath}/${result.poster_path}`
  
  return (
    <div className='search-result'>
      <img src={imgMovie}></img>
      <p>{result.title}</p>
      </div>
  )
}
