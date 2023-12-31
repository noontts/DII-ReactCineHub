import React from 'react';
import PropTypes from 'prop-types';
import SearchResult  from './SearchResult';
import styled from 'styled-components';

function SearchResultsList ({ results , className, setResults}){

  const maxResult = results.slice(0,5);
  return (

    <div className={className}>
      {/* ... rest of the code */
         maxResult.map((results)=> {
          return <SearchResult result={results} key={results.id} setResults={setResults}/>

        })
      
      }
    </div>
    
  );
}

SearchResultsList.propTypes = {
  results : PropTypes.array.isRequired,
  className : PropTypes.string,
  setResults : PropTypes.func.isRequired
}

export default styled(SearchResultsList)`

    background-color: #fff;
    border-top: none;
    border-radius: 0 0 4px 4px;

    width: 520px;
    padding: 0;
    margin-top: 45px;
    z-index: 1;
    position: absolute;
&:focus{
    cursor: pointer;
    display: block;
}

`
