import React, { useState } from "react";
import 'boxicons';
import "./SearchBar.css";


export function SearchBar({setResults}){
      const [input , setInput] = useState("");

      const fetchdata = (value) => {
        fetch("https:jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
           const results = json.filter((user) => {
                return (
                    value &&
                    user &&

                 user.name && 
                 user.name.toLowerCase().includes(value.toLowerCase())
                 );
           });
           
           setResults(results)
        })
      }

      const handleChange = (value) => {
        setInput(value)
        fetchdata(value)
      }
       
        
      
    return(
        <>
        <div className="input-wrapper"> 
        
        <box-icon name='search-alt-2' size="lg" color="black"></box-icon> 
            <input  placeholder="Search for movie here" 
                    value={input} 
                    onChange={ (e) => handleChange(e.target.value)}>
            </input> 
        </div>
        
        </>
      
    );
}