import React from "react";
import './ButtonDetail.css';

export function ButtonDetail({ movieID }){
    return (
        <a href="#" className="btn-detail"><span style={{textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)'}}>Detail</span></a>
    );
}