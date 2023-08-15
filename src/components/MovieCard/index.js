import React, { useState } from "react";
import PropTypes from "prop-types";
import genreData from "../../assets/data/genre.json"
import "./MovieCard.css";
import { MovieYear } from "./MovieYear";
import { ButtonDetail } from "./ButtonDetail";
import { HoverContent } from "./HoverContent";

function getGenreNameById(genreId) {
    const genre = genreData.genres.find(genre => genre.id === genreId);
    return genre ? genre.name : "Unknown Genre";
}

export function MovieCard({ movieObject }){
    const [imgPath, setImgPath] = useState("https://image.tmdb.org/t/p/original");

    console.log(movieObject);

    if(!movieObject){
        return (
            <div>Loading...</div>
        );
    }
    
    return (
        <div className="movie-card">
            <div className="movie-cover-img" style={{backgroundImage:`url('${imgPath}${movieObject.poster_path}')`}}>
                {/* <HoverContent/> */}
            </div>

            <div className="detail-container">
                <div className="flex-container">
                    <MovieYear year={movieObject.release_date.split("-")[0]}/>
                    <div className="movie-rate">{movieObject.vote_average}</div>
                </div>
                <div className="movie-title" style={{marginTop:'5px'}}> {movieObject.title} </div>
                <div className="movie-genre">
                    {movieObject.genre_ids.map((genreId,index) => (
                        <React.Fragment key={genreId}>
                            {index !== 0 && ', '}
                            <span>{getGenreNameById(genreId)}</span>
                        </React.Fragment>
                    ))}
                </div>
                <div style={{textAlign: 'center',marginTop : '12px',display: "flex", justifyContent: 'center'}}>
                    <ButtonDetail/>
                </div>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movieObject : PropTypes.object.isRequired
}