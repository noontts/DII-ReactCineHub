import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2 style={{color:"white",margin:"15px 0 10px 50px",fontSize:"30px"}}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
