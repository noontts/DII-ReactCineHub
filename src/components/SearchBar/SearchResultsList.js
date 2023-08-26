import React from 'react';
import "./SearchBar.css";
import { SearchResult } from './SearchResult';

export function SearchResultsList ({ results }){

  const maxResult = results.slice(0,10);
  return (
    <div className='results-list'>
      {/* ... rest of the code */
         maxResult.map((results)=> {
          return <SearchResult result={results} key={results.id}/>
        })
      
      }
    </div>
  );
}
