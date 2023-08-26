import React from 'react';
import "./SearchBar.css";
import { SearchResult } from './SearchResult';

export function SearchResultsList ({ results }){
  console.log(results); // check the type of 'results'

  return (
    <div className='results-list'>
      {/* ... rest of the code */
        results.map((result , id)=> {
          return <SearchResult result={result} key={id}/>
        })
      
      }
    </div>
  );
}
