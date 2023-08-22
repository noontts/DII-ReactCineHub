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

export function MovieCard({ movieObject , addToFavorite}){
    const [imgPath, setImgPath] = useState("https://image.tmdb.org/t/p/original");

    let movieGenre = (
        <>
            {movieObject.genre_ids.map((genreId, index) => (
                <React.Fragment key={genreId}>
                    {index !== 0 && ', '}
                    <span>{getGenreNameById(genreId)}</span>
                </React.Fragment>
            ))}
        </>
    );
    
    if(!movieObject){
        return (
            <div>Loading...</div>
        );
    }
    
    return (
        <div className="movie-card">
            <div className="movie-cover-img" style={{backgroundImage:`url('${imgPath}${movieObject.poster_path}')`}}>
                <div className="img-hover-content">
                    <HoverContent movieObject={movieObject} movieGenre={movieGenre} addToFavorite={addToFavorite}/>
                </div>
            </div>

            <div className="detail-container">
                <div className="flex-container">
                    <MovieYear year={movieObject.release_date.split("-")[0]}/>
                    <div className="movie-rate">
                        <span>{movieObject.vote_average}</span>
                        <box-icon type='solid' name='star' color='#f2b01e'size='xs'/>
                    </div>
                </div>
                <div className="movie-title" style={{marginTop:'5px'}}> {movieObject.title} </div>
                <div className="movie-genre">{movieGenre}</div>
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