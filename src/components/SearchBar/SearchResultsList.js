import React from 'react';
import PropTypes from 'prop-types';
import SearchResult  from './SearchResult';
import styled from 'styled-components';

function SearchResultsList ({ results , className}){

  const maxResult = results.slice(0,5);
  return (
    <div className={className}>
      {/* ... rest of the code */
         maxResult.map((results)=> {
          return <SearchResult result={results} key={results.id}/>
        })
      
      }
    </div>
  );
}

SearchResultsList.propTypes = {
  results : PropTypes.array.isRequired
}

export default styled(SearchResultsList)`

    background-color: #fff;
    border-top: none;
    border-radius: 0 0 4px 4px;
    width: 520px;
    padding: 0;
    margin-top: 55px;
    z-index: 1;
    position: absolute;
&:focus{
    cursor: pointer;
    display: block;
}

`
