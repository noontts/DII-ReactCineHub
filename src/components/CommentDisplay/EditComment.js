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
            <div className='Data_container'>
                <h1 className='header_edit'>Edit Your Comment</h1>
                <textarea
                    type="text"
                    className='new_Data'
                    value={editedComment}
                    onChange={handleCommentChange}
                />

                <div className='Button-container'>
                    <button className='Cancel' onClick={cancelEditing}>Cancel</button>
                    <button className='Save' onClick={saveEditedComment}>Save</button>
                </div>
            </div>
        </div>

  </div>
  );
}


export default styled(EditComment)`

    left: 0%;

    .editContainer{
        width: 100%;
        height: 50%;

        background-color: #D9D9D9;
        z-index: 1000;

        border-radius: 12px;

        opacity: 1;
    }

    .Data_container{
        padding: 50px;
        margin-left: 50px;
        
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
        border: 2px solid #211f1f;
        height: 120px;
        width: 900px;
        border-radius: 7px;
        font-size: 17px;
        resize: none;

        background-color: #FFF;
    }

.Button-container{
    margin-left: 0px;
}

.Save{
    cursor: pointer;
    font-size: 20px;
    color: #FFF;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
    width: 100px;
    margin-left: 20px;
    border: none;
    background-color: #a1e533;
    border: solid 1px #a1e533;
    border-radius: 5px;
    transition: 300ms
}

.Save:hover{
    color: #FFFF;
    background-color: #17B00A;
    border: solid 1px #17B00A;
    transition: 300ms;
}

.Save:active{
    color: #FFFF;
    background-color: #7BFF79;
    border: solid 1px #7BFF79;
    transition: 100ms;
}
    

.Cancel{
    cursor: pointer;
    font-size: 20px;
    color: #FF3a3a;
    text-shadow: 2px 2px 1px rgba(255, 122, 122, 0.25);
    width: 100px;
    border: none;
    background-color: #FFFF;
    border-radius: 5px;
    border: solid 1px #FF3a3a;
    z-index: 1001;
    transition: 300ms
}

.Cancel:hover{
    color: #FFFF;
    background-color: #FF3a3a;
    transition: 300ms
}

.Cancel:active{
    color: #FFFF;
    background-color: #FF7A7A;
    transition: 100ms
}





`;
