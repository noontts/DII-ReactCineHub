import React, { useEffect, useState } from "react";
import { searchMovie } from "../../services/movieapi";
import styled from 'styled-components';


function SearchBar({setResults , className}){
      const [input , setInput] = useState("");

      const handleChange = (value) => {
        setInput(value)
        fetchSearch(value)
      }
      
      const fetchSearch = async(value) => {
        const movieSearch = await searchMovie(value);
        setResults(movieSearch.results);
      }
        
      
    return(
        <>
        <div className={className}> 
        <box-icon name='search-alt-2' size="sm" color="black"></box-icon> 
            <input  placeholder="Search for movie here...."
                    id="searchbar" 
                    value={input} 
                    onChange={ (e) => handleChange(e.target.value)}
                    >
            </input> 
        </div>
        </>
    );
}

export default styled(SearchBar)`

    height: 50px;
    min-width: 500px;
    border-radius: 40px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding-left: 10px;

input {
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    font-size: 14px;
    margin-left: 5px;
}
input:focus{
    outline: none;
}
`