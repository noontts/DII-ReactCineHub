import React from "react";
// import PropTypes from "prop-types";
import { ButtonDetail } from "./ButtonDetail";

export function MovieCard({ movieObject }){
    
    //Function Genre



    return (
        <div className="movie-card-container">
            movie
        <div className="movie-year">Year</div>
        <div className="movie-name">Name</div>
        <ButtonDetail/>
        </div>
    )
}

// MovieCard.PropTypes = {
//     movieObject : PropTypes.object.isRequired
// }