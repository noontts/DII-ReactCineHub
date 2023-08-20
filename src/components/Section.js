import React from 'react';

const Section = ({ title, children }) => {
  return (  
    <div className="section">
      <div className='title-section' style={{display:"flex",height:"25px",marginTop:"10px",alignItems:"center",position:"relative"}}>
        <div style={{width:"4px",height:"100%",backgroundColor:"#A1E533",marginLeft:"50px",borderRadius:"10px"}}></div>
        <h3 style={{color:"white",margin:"15px 0 10px 0",fontSize:"25px",position:"absolute",left:"65px",top:"-21px"}}>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Section;
