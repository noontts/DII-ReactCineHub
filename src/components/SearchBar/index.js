import React, { useState } from "react";
import "./SearchBar.css";
import { searchMovie } from "../../services/movieapi";


export function SearchBar({setResults}){
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
        <div className="input-wrapper"> 
        
        <box-icon name='search-alt-2' size="sm" color="black"></box-icon> 
            <input  placeholder="Search for movie here" 
                    value={input} 
                    onChange={ (e) => handleChange(e.target.value)}>
            </input> 
        </div>
        
        </>
      
    );
}