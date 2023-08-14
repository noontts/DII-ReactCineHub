import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import genreData from "../../assets/data/genre.json"
import "./MovieCard.css";
import { MovieYear } from "./MovieYear";
import { ButtonDetail } from "./ButtonDetail";


function getGenreNameById(genreId) {
    const genre = genreData.genres.find(genre => genre.id === genreId);
    return genre ? genre.name : "Unknown Genre";
}

export function MovieCard({ movieObject }){
    const [imgPath, setImgPath] = useState("https://image.tmdb.org/t/p/original");

    if(!movieObject){
        return (
            <div>Loading...</div>
        );
    }
    
    return (
        <div className="movie-card-container">
            <img src={`${imgPath}${movieObject.poster_path}`}></img>
            <div className="detail-container">
                <div className="flex-container">
                    <MovieYear year={movieObject.release_date.split("-")[0]}/>
                    {/* <div className="movie-year"> {movieObject.release_date.split("-")[0]} </div> */}
                    <div className="movie-rate">{movieObject.vote_average}</div>
                </div>
                <div className="movie-title"> {movieObject.title} </div>
                <div className="movie-genre">
                    {movieObject.genre_ids.map((genreId,index) => (
                        <React.Fragment key={genreId}>
                            {index !== 0 && ', '}
                            <span>{getGenreNameById(genreId)}</span>
                        </React.Fragment>
                    ))}
                </div>
                <ButtonDetail/>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movieObject : PropTypes.object.isRequired
}