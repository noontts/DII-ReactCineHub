import axios from 'axios';

const COMMENTS_URL = 'http://localhost:9000/comments';

export const newComment = async(movie_id,user,comment) =>{
    const newComment = {
      user: "user3",
      comment: "The visual effects were stunning!"
    };
    axios.patch(`${COMMENTS_URL}/${movie_id}`, {
      movie_id: "movie_id",
      comments: [
          ...existingComments, // Make sure to replace this with the existing comments array
          newComment
      ]
  })
      .then(response => {
          console.log('Comment added successfully:', response.data);
      })
      .catch(error => {
          console.error('Error adding comment:', error);
      });
  }
  
export const updateComment = async(movie_id,user,comment) =>{
    const updatedComment = {
        user: "user2", // Username to match
        comment: "I still think the storyline is fantastic!"
    };

    axios.get(`${COMMENTS_URL}/${movie_id}`)
    .then(response => {
        const comments = response.data.comments;

        const commentIndex = comments.findIndex(comment => comment.user === updatedComment.user);

        if (commentIndex !== -1) {
            comments[commentIndex].comment = updatedComment.comment;

            axios.patch(`${COMMENTS_URL}/${movie_id}`, {
                movie_id: movie_id,
                comments: comments
            })
            .then(patchResponse => {
                console.log('Comment updated successfully:', patchResponse.data);
            })
            .catch(patchError => {
                console.error('Error updating comment:', patchError);
            });
        } else {
            console.log('Comment not found for the specified user.');
        }
    })
    .catch(error => {
        console.error('Error fetching comments:', error);
    });
  }