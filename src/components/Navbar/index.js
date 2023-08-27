
import React, { useState } from "react";

import './navbarNight.css';
import LogoImg from '../LogoCard/Logo.png';

import { BiGridAlt } from "@react-icons/all-files/bi/BiGridAlt";
import { BiStar } from "@react-icons/all-files/bi/BiStar";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";

export function Navbar(){

    const [light,setLight] = useState(false); // Set ค่า LightMode เป็น False
    const lightMode = () => { // ถ้า กดปุ่ม  LightMode จะ ทำงาน
        setLight(!light); // Set ค่า ตรงข้ามจากเดิม
      };


    return (
            <nav class="navbarBackgroundNight"  className={light? 'navbarBackgroundLight':'navbarBackgroundNight'}> 
                <h1 class='Logo-Name-Nav'       className={light? 'Logo-Name-Nav_Light':'Logo-Name-Nav'}>Movie</h1>
                {/* <img src={LogoImg}></img>  */}
                <button class='DashBoard'       className={light? 'DashBoard_Light': 'DashBoard'}>  <BiGridAlt class='icon'/>  <p>DashBoard</p></button>
                <button class='Top_50'          className={light? 'Top_50_Light': 'Top_50'}>     <BiStar class='icon'/>     <p>Top 50</p></button>
                <button class='Favorite'        className={light? 'Favorite_Light': 'Favorite'}>   <BiHeart class='icon'/>    <p>Favorite</p></button>
                <button onClick={lightMode}     class='LightMode' className={light? 'LightMode_Light': 'LightMode'}> <BiSun class='icon'/>      <p>Light Mode</p></button>
                <button class='Logout'          className={light? 'Logout_Light': 'Logout'}>     <BiLogOut class='icon'/>   <p>Logout</p></button>
            </nav>
    );
}

export default Navbar;



