import React from "react";

export function HoverContent({ movieObject }){
    
    const containerHoverStyle = {
        opacity: '1',
        width: '100%',
        height: '328px',
        top: '0',
        right: '0',
        position: 'absolute',
        background: '#211F1F',
        backdropFilter: 'blur(3px)'
    };
    
    
    return(
        <div style={containerHoverStyle}>
            <div className="favorite">favorite</div>
            <div className="title"> title </div>
            <div className="genre">genre</div>
            <div className="year">year</div>
            <div className="rate">rate</div>
        </div>
    );
}