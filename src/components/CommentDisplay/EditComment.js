import React,{useState} from 'react'
import { styled } from 'styled-components'
import { updateComment } from '../../services/commentsapi';

export function EditComment({ commentText,className , movie_id , comment_id , onSave, onCancel }) {
  // State to store the edited comment text
  const [editedComment, setEditedComment] = useState(commentText);

  // Function to handle the comment text change during editing
  const handleCommentChange = (event) => {
    setEditedComment(event.target.value);
  };

  // Function to save the edited comment
  const saveEditedComment = async () => {
    await updateComment(movie_id, comment_id, editedComment);
    onSave(editedComment); // Notify the parent component
  };

  // Function to cancel editing
  const cancelEditing = () => {
    onCancel();
  };

  return (
    <div className={className}>
    <div className='editContainer'>
      <h1 className='header_edit'>Edit</h1>
      <textarea
        type="text"
        className='new_Data'
        value={editedComment}
        onChange={handleCommentChange}
      />

      <div className='Button-container'>
        <button className='Save' onClick={saveEditedComment}>Save</button>
        <button className='Cancel' onClick={cancelEditing}>Cancel</button>
      </div>
    </div>
  </div>
  );
}


export default styled(EditComment)`

    left: 0%;

    .editContainer{
        width: 50%;
        height: 50%;

        background-color: #7adada;
        z-index: 1000;

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
        resize: none;
        font-size: 16px;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #0000;
        height: 120px;
        width: 1200px;
        border-radius: 7px;
        font-size: 17px;
        resize: none;
    }





`;
