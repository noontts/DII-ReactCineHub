import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import './index.css'



export default function NotFound({className}){

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

styled(NotFound)`

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

    .mainPassage {
        color: #A1E533;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        width: 591px;
        height: 134px;
        flex-shrink: 0;
    }


    .PRight{
        display: flex-inline;
    }

    .404{
        width: 538.688px;
        height: 306.941px;
        transform: rotate(29.426deg);
        flex-shrink: 0;

        color: #A1E533;
        font-size: 258px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        background-color: #FFF;

    }
    

    .zero{
        color: #FFF;
        font-size: 258px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }

`;