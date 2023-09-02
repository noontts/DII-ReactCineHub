import  React,{useState} from 'react';
import styled from 'styled-components'
import EditComment  from './EditComment';


export const CommentDisplay = ({ comment, className , movie_id , comment_id , onDelete}) => { 

    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment.comment);
  
    
    const handleEditClick = () => { // function เข้า สู่โหลดแก้ไขข้อความ
      setIsEditing(true);
    };

    const handleDeleteClick = async () => { // function ลบ comment
        try {
            await onDelete(movie_id, comment_id);
          } catch (error) {
            console.error("Error deleting comment:", error);
          }
        }

    const handleSaveEditedComment = (newComment) => { 
        setIsEditing(false);
        setEditedComment(newComment);
      };
    
      
      const handleCancelEditing = () => { // function ออก สู่โหลดแก้ไขข้อความ
        setIsEditing(false);
      };
  
    return (
      <>
        <div className={className}>
          <div className='comment-container'>
            <div className='user_data'>
              <div className='profile_container'>
                <div className='profile'></div>
                <h4 className='user-name'>{comment.user}</h4>
              </div>
              {isEditing ? (
                <EditComment commentText={editedComment}
                movie_id={movie_id}
                comment_id={comment_id}
                onSave={handleSaveEditedComment}
                onCancel={handleCancelEditing} 
                />
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
border-top: 1px solid #d9d9d9;
width : 1150px;
margin-top : 3%;
padding-top: 30px;
padding-left: 30px;

.comment-containner{
    width: 100%;
    height: 100%;
    margin-left: 5%;
}

.profile_container{
  display: flex;
  align-items: flex-start;
}

.profile{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d9d9d9;
  background-image: url(https://i.pinimg.com/736x/02/af/6f/02af6f406b25e5c284daa0c39cf96a9a.jpg);
  background-position: center;
  background-size: 30px 30px;
  border: 2px solid #a1e533;
}

.user-name{
    font-weight: bold;
    font-size: 20px;
    color:#FFF;
    margin-bottom : 1%;
    margin-left: 10px;
}

.comment-text{
    font-weight: lighter;
    font-size: 18px;
    color:#FFF;
}

.Button-container{
    margin-top : 20px
}

.Edit-data{
    cursor: pointer;
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
    cursor: pointer;
    font-size: 16px;
    color: #FF3a3a;
    width: 80px;
    border: none;
    background-color: #211f1f;
    border-radius: 5px;
    margin-left: 10px;
    transition: 300ms
}

.Delete-data:hover{
    color: #FFFF;
    background-color: #FF3a3a;
    transition: 300ms

}


`