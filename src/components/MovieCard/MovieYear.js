import React from "react";
import PropTypes from "prop-types";


export function MovieYear({year}){

    const containerYearStyle = {
        backgroundColor: '#D9D9D9',
        borderRadius: '10px',
        padding : '2px 8px',
        fontSize:'10px',
        color: '#000',
        textAlign: 'center'
    };


    return (
        <div style={containerYearStyle}>{year}</div>
    );
}

MovieYear.propTypes = {
    year : PropTypes.string.isRequired
}