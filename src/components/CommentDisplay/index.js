import  React from 'react';

import styled from 'styled-components'

export const CommentDisplay = ({comment, className}) => {
    return(

    <>
        <div className={className}>
            <div className='comment-containner'>
                <div className='user_data'>
                    <h4 className='user-name'>{comment.user}</h4>
                    <p className='comment-text'>{comment.comment}</p>
                </div>
                <div className='Button-container'>
                    <button className='Edit-data'>Edit</button>
                    <button className='Delete-data'>Delete</button>
                </div>
            </div>
        </div>
    </> 
    )
}

export default styled(CommentDisplay)`

width : 1150px;
margin-top : 5%;

*{
    font-family: 'Poppins', sans-serif;
}

.comment-containner{

    width: 100%;
    height: 100%;
    margin-left: 5%;
}

.user-name{
    font-weight: bold;
    font-size: 20px;
    color:#FFF;

    margin-bottom : 1%
}

.comment-text{
    font-weight: lighter;
    font-size: 18px;
    color:#FFF;
}

.Button-container{
    margin-top : 1%
}

.Edit-data{
    font-size: 16px;
    color: #a1e533;
    width: 80px;
    border: none;
    background-color: #211f1f;
    border-radius: 5px;
    transition: 300ms
}

.Edit-data:hover{
    color: #FFFF;
    background-color: #a1e533;
    transition: 300ms;
}

.Delete-data{
    font-size: 16px;
    color: #FF3a3a;
    width: 80px;
    border: none;
    background-color: #211f1f;
    border-radius: 5px;
    transition: 300ms
}

.Delete-data:hover{
    color: #FFFF;
    background-color: #FF3a3a;
    transition: 300ms

}



`