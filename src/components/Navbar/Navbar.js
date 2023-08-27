import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SearchBar } from '../SearchBar';
import { SearchResultsList} from '../SearchBar/SearchResultsList'
import logoCinihub  from '../LogoCard/CinihubLogo.png';


import './Navbar.css'
//import './navbarNight.css';

import * as BiIcons from 'react-icons/bi';

/*
import { BiGridAlt } from "@react-icons/all-files/bi/BiGridAlt";
import { BiStar } from "@react-icons/all-files/bi/BiStar";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
*/

export function Navbar(){
    const [results,setResults] = useState([]);
    const [sidebar,setSidebar] = useState(true);

    const miniSidebar = () => setSidebar(!sidebar)

    /*
    const [light,setLight] = useState(false); // Set ค่า LightMode เป็น False
    const lightMode = () => { // ถ้า กดปุ่ม  LightMode จะ ทำงาน
        setLight(!light); // Set ค่า ตรงข้ามจากเดิม
      };*/
    
    return(
        <>
            <div className="navbar">
                <Link to='#' className="manu-bar">
                    <BiIcons.BiMenu onClick={miniSidebar} className='icon-toggle'/> 
                </Link>
                <img src={logoCinihub} className="logopic"/>
                <div className="Searchbar-container">
                    <SearchBar className='SearchBar' setResults={setResults}/>
                    <SearchResultsList results={results}/>
                </div>

            </div>
            <nav className={sidebar ? 'nav-menu-default' : 'nav-menu-mini span-hidden'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle"></li>
                
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className="navtext">{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </>
        
    )


/*
    return (
            <div class="navbarBackgroundNight"  className={light? 'navbarBackgroundLight':'navbarBackgroundNight'}> 
                <h1 class='Logo-Name-Nav'       className={light? 'Logo-Name-Nav_Light':'Logo-Name-Nav'}>Movie</h1> 
                <button class='DashBoard'       className={light? 'DashBoard_Light': 'DashBoard'}>  <BiIcons.BiSolidGridAlt class='icon'/>  <p>DashBoard</p></button>
                <button class='Top_50'          className={light? 'Top_50_Light': 'Top_50'}>     <BiIcons.BiSolidStar class='icon'/>     <p>Top 50</p></button>
                <button class='Favorite'        className={light? 'Favorite_Light': 'Favorite'}>   <BiIcons.BiSolidHeart class='icon'/>    <p>Favorite</p></button>
                <button onClick={lightMode}     class='LightMode' className={light? 'LightMode_Light': 'LightMode'}> <BiIcons.BiSolidSun class='icon'/>      <p>Light Mode</p></button>
                <button class='Logout'          className={light? 'Logout_Light': 'Logout'}>     <BiIcons.BiSolidLogOut class='icon'/>   <p>Logout</p></button>
            </div>
    );*/
}

export default Navbar;



