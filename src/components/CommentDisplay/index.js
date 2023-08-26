import  React from 'react';
import './CommentDisplay.css'

export const CommentDisplay = () => {
    return(
        <>
            <div className='comment-containner'>
                <h4 className='user-name'>User ท่านใด</h4>
                <p className='comment-text'>หนังไม่สนุกครับ ป็อปคอร์นไม่อร่อย</p>
                
                <div className='Button-container'>
                    <button className='Edit-data'>Edit</button>
                    <button className='Delete-data'>Delete</button>
                </div>
            </div>
        </>
    )
}