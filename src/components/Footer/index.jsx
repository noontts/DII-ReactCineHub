import React from 'react'
import styled from 'styled-components';
import imgrobot from '../LogoCard/robot logo.png';


export const Footer = ({className}) => {
    
  return (
    <div className={className}>
                <div className="footer-container">
                    <div className="logo__footer">
                        <img src={imgrobot} alt='robot-logoo'/>
                        <h1 style={{color:"white"}}>CINEHUB</h1>
                    </div>
                    
                    <ul>
                        <li><box-icon type='logo' name='github' color="white" size="md"></box-icon></li>
                        <li><box-icon type='logo' name='facebook-circle' color="white" size="md"></box-icon></li>
                        <li><box-icon name='instagram-alt' type='logo'color="white" size="md"></box-icon></li>
                        <li><box-icon name='envelope' type='solid' color="white" size="md"></box-icon></li>
                    </ul>

                    
                </div>
                
            <div className="copyright">
                        <p>Copyright@ 2023 designed by Potter</p>
                    </div>
     
        
    </div>
  )
}
export default styled(Footer)`

   position: relative;
   background-color: black;

   .footer-container{
    padding-top: 30px;
   }
   
    .copyright{
        position: absolute;
        bottom: 30px;
        right: 30px;
        color: #A6A6A6;
    }

    & ul {
        margin-top: 10px;
        list-style: none;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    & li {
        padding: 50px 30px;
    }
    .logo__footer{
        position: absolute;
        left: 43%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

