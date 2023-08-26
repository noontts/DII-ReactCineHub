import React from "react";

function Container({ children }){
    return <main style={{display:"flex",flexDirection:"column",alignItems:"center"}}>{children}</main>
}

export default Container;