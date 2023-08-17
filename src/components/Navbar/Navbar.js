import React, { useState } from "react";

import './navbarNight.css';


import { BiGridAlt } from "@react-icons/all-files/bi/BiGridAlt";
import { BiStar } from "@react-icons/all-files/bi/BiStar";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";

export function Navbar(){

    const [light,setLight] = useState(false);
    const lightMode = () => {
        setLight(!light);
      };


    return (
        <div className={light ? "navbarBackgroundLight" : "navbarBackgroundNight"}>
            <div class="navbarBackgroundNight"> 
                <h1 class='Logo-Name-Nav'>Movie</h1> 
                <button class='DashBoard'>  <BiGridAlt class='icon'/>  <p>DashBoard</p></button>
                <button class='Top_50'>     <BiStar class='icon'/>     <p>Top 50</p></button>
                <button class='Favorite'>   <BiHeart class='icon'/>    <p>Favorite</p></button>
                <button onClick={lightMode} class='LightMode' > <BiSun class='icon'/>      <p>Light Mode</p></button>
                <button class='Logout'>     <BiLogOut class='icon'/>   <p>Logout</p></button>
            </div>
        </div>
    );
}

export default Navbar;



