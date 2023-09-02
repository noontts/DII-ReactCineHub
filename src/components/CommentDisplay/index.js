import  React,{useState} from 'react';
import styled from 'styled-components'
import EditComment  from './EditComment';


export const CommentDisplay = ({ comment, className , movie_id , comment_id , onDelete}) => {
    // State to manage whether the comment is being edited
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment.comment);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleDeleteClick = async () => {
      console.log(movie_id);
        await onDelete(movie_id, comment.commentId);
      };

    const handleSaveEditedComment = (newComment) => {
        setIsEditing(false);
        setEditedComment(newComment);
      };
    
      // Function to cancel editing
      const handleCancelEditing = () => {
        setIsEditing(false);
      };
  
    return (
      <>
        <div className={className}>
          <div className='comment-container'>
            <div className='user_data'>
              <h4 className='user-name'>{comment.user}</h4>
              {isEditing ? (
                // Pass comment.comment as a prop to EditComment component
                <EditComment commentText={editedComment}
                movie_id={movie_id}
                comment_id={comment_id}
                onSave={handleSaveEditedComment}
                onCancel={handleCancelEditing} />
              ) : (
                <p className='comment-text'>{editedComment}</p>
              )}
            </div>
            <div className='Button-container'>
            {isEditing ? null : (
              <>
                <button className='Edit-data' onClick={handleEditClick}>Edit</button>
                <button className='Delete-data' onClick={handleDeleteClick}>Delete</button>
              </>
            )}
          </div>
          </div>
        </div>
      </>
    );
  };

export default styled(CommentDisplay)`

width : 1150px;
margin-top : 5%;

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

.Cancel{
    font-size: 16px;
    color: #FF3a3a;
    width: 80px;
    border: none;
    background-color: #211f1f;
    border-radius: 5px;
    z-index: 1001;
    transition: 300ms
}

.Cancel:hover{
    color: #FFFF;
    background-color: #FF3a3a;
    transition: 300ms
}



`