import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';




 function NotFound({className}){

  return (
    <div className={className}>
        <div className='background'>
            <div className='page_container'>
                <table className='containner'>
                    <tr className='data_containner'>
                        <td className='PLeft'>
                            <h1 className='mainPassage'>Page Not Found...</h1>
                            <p className='error_passage'>You can go back to Homepage</p>
                            <Link className='linkbutton' to={'/'}><BiIcons.BiLeftArrowAlt className='iconbutton'/>Back to Homepage</Link>
                        </td>
                        <td className='PRight'>
                            <h1 className='f0f'> 4 <div className='zero'> 0 </div> 4 </h1>
                            <h1 className='f0f2'> 4 <div className='zero'> 0 </div> 4 </h1>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default styled(NotFound)`

   
* {
    font-family: 'Poppins', sans-serif;
}

.background{
    background-color : #211f1f;
}

.page_container {
    width: 80%;
    height: 80%;
    top : 20%;
    left : 20%;

}

.containner{
    width: 100%;
    height: 100%;

}

.data_containner{
    display: flex;

    height: 100%;
}

.PLeft{
    width: 100%;
    height: 100%;

    padding-top: 5%;
}


.PRight{
    width: 100%;
    height: 100%;

    display: flex;
    margin-left: 5%;
    margin-top: -10%;




}

.mainPassage {
    color: #A1E533;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: 427px;
    height: 64px;
    flex-shrink: 0;


}

.error_passage{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    width: 591px;
    height: 134px;
    flex-shrink: 0;
}

.linkbutton{
    text-decoration: none;
    color: #ffffff;
    background-color: #211f1f;
    border: 3px solid #ffffff;
    border-radius: 12px;
    border-color: #ffffff;
    box-shadow: 1px 2.5px 5px #ffffff;
    font-size: 16px;
    width: 31%;

    padding: 10px 20px;
    display: flex;

    margin-top: 10%;

    transition: 300ms;

}

.linkbutton:hover{
    border-color: #A1E533;
    color: #A1E533;
    background-color: #211f1f;
    box-shadow: 1px 2.5px 5px #A1E533;

    transition: 100ms;
}
/*caf586*/
.linkbutton:active{
    border-color: #caf586;
    color: #211f1f;
    background-color: #caf586;
    box-shadow: 1px 2.5px 20px #caf586;

    transition: 100ms;
}

.iconbutton{
    font-size: 24px;
}


.f0f{
    width: 538.688px;
    height: 306.941px;
    transform: rotate(29.426deg);
    flex-shrink: 0;
    text-shadow: 10px 18px 18px rgba(0, 0, 0, 0.50);

    color: #A1E533;
    font-size: 258px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    display: flex;
    position: absolute;

    

}


.zero{
    color: #FFF;
}


.f0f2{
    width: 538.688px;
    height: 306.941px;
    transform: rotate(29.426deg);
    flex-shrink: 0;

    color: #A1E533;
    font-size: 258px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    opacity: 0.5;

    display: flex;
    padding-top: 10px;
    
    position: relative;
}

`;