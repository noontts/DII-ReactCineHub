import React from "react";
import './ButtonDetail.css';
import { Link } from "react-router-dom";

export function ButtonDetail({ movieID }){
    return (
        <Link to={`movie/${movieID}`} className="btn-detail"><span style={{textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)'}}>Detail</span></Link>
    );
}