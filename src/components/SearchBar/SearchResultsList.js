import React from 'react';
import PropTypes from 'prop-types';
import "./SearchBar.css";
import { SearchResult } from './SearchResult';

export function SearchResultsList ({ results }){

  const maxResult = results.slice(0,5);
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

SearchResultsList.propTypes = {
  results : PropTypes.object.isRequired
}
