import axios from 'axios';

const COMMENTS_URL = 'http://localhost:9000/comments';

export const newComment = async(movie_id,user,comment) =>{
    try {
        const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);
        const existingComments = response.data.comments;
    
        const newComment = {
          user: "USER",
          comment: comment,
        };

        existingComments.push(newComment);

      await axios.patch(`${COMMENTS_URL}/${movie_id}`, {
        movie_id: `${movie_id}`,
        comments: existingComments // Updated comments array
      });
      
      console.log('Comment added successfully:', response.data);
    }catch(error) {
          console.error('Error adding comment:', error);
    }
  };
  
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


  export const fetchComment = async(movie_id) =>{
    try {
        // Make a GET request to the server using Axios
        const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);
        
        // Check if the request was successful
        if (response.status === 200) {
          // Movie data is in response.data
          const commentData = response.data;
          console.log('Comment Data:', commentData);
          return commentData;
        } else {
          console.error('Failed to fetch movie data');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
  }