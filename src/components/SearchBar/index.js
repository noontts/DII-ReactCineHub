import React, { useState } from "react";
import "./SearchBar.css";

export function SearchBar(){
      const [input , setInput] = useState("");


    return(
        <>
        <div className="input-wrapper"> 
        
        <box-icon name='search-alt-2' size="lg" color="black"></box-icon> 
            <input placeholder="Search for movie here" value={input} onChange={(e) => setInput(e.target.value)}></input> 
        </div>
        
        </>
      
    );
}