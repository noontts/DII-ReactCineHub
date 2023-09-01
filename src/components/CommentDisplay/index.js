import  React from 'react';
import './CommentDisplay.css'

export const CommentDisplay = ({comment}) => {
    return(
        <>
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
        </>
    )
}