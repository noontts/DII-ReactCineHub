import React from 'react';
import "./SearchBar.css";


export const SearchResult = ({result}) => {
  return (
    <div className='search-result'>{result.name}</div>
  )
}
