import React from 'react'
import { styled } from 'styled-components'




export function EditComment() {
  return (

    <div className='editContainer'>
        <h1 className='header_edit'>Edit</h1>
        <p className='user_data'></p>
        <input type="text" className='new_Data'/>

        <div className='Button-container'>
            <button className='Cancel'>Cancel</button>
            <button className='Save'>Save</button>
        </div>
    </div>

  )
}


export default styled(EditComment)`

    opacity: 0.3;

    .editContainer{
        width: 50%;
        height: 50%;
        position: absolute;
        margin: auto auto;

        opacity: 1;
    }

    .header_edit{
        font-size: 28px;
        font-weight: bold;
    }

    .user_data{
        font-size: 16px;
    }

    .new_Data{
        font-size: 16px;
        
    }





`;
