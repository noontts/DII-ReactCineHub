import axios from "axios";

const COMMENTS_URL = "http://localhost:9000/comments";

export const fetchComment = async (movie_id) => {
  try {
    // Make a GET request to the server using Axios
    const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);

    // Check if the request was successful
    if (response.status === 200) {
      // Movie data is in response.data
      const commentData = response.data;
      console.log("Comment Data:", commentData);
      return commentData;
    } else {
      console.error("Failed to fetch movie data");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      await createNewMovie(movie_id);
    }else{
      console.error("Error fetching movie data:", error);
    }
  }
};

export const createNewMovie = async (movie_id) => {
  try {
    const newMovieData = {
      movie_id: `${movie_id}`,
      comments: [],
    };
    // Use an API endpoint to create a new movie entry with the provided movie_id
    // You may need to adjust this part based on your API or database setup
    await axios.post(`${COMMENTS_URL}`, newMovieData);

    // log a message or handle success here
    console.log(`New movie with movie_id ${movie_id} created successfully.`);
  } catch (error) {
    console.error("Error creating a new movie:", error);
    throw error; // Optionally, re-throw the error for further handling
  }
};


export const newComment = async (movie_id, comment) => {
  try {

    const commentId = Date.now().toString();

    const newComment = {
      commentID : commentId,
      user: "USER",
      comment: comment,
    };

    const updatedResponse = await axios.get(`${COMMENTS_URL}/${movie_id}`);
    const existingComments = updatedResponse.data.comments;

    existingComments.push(newComment);

    await axios.patch(`${COMMENTS_URL}/${movie_id}`, {
      movie_id: `${movie_id}`,
      comments: existingComments, // Updated comments array
    });

    console.log("Comment added successfully:", updatedResponse.data);
    return newComment;
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

export const updateComment = async (movie_id, commentID, updatedComment) => {
  try {
    // Fetch the existing comments for the movie
    const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);
    const existingComments = response.data.comments;

    // Find the index of the comment with the specified commentID
    const commentIndex = existingComments.findIndex(comment => comment.commentID === commentID);

    // If the comment with the specified commentID is found, update it
    if (commentIndex !== -1) {
      existingComments[commentIndex] = {
        ...existingComments[commentIndex],
        comment: updatedComment,
      };

      // Send a PATCH request to update the comments
      await axios.patch(`${COMMENTS_URL}/${movie_id}`, {
        movie_id: `${movie_id}`,
        comments: existingComments,
      });

      console.log("Comment updated successfully.");
    } else {
      console.error("Comment not found with commentID:", commentID);
    }
  } catch (error) {
    console.error("Error updating comment:", error);
  }
};

export const deleteComment = async (movie_id, commentID) => {
  try {
    // Fetch the existing comments for the movie
    const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);
    const existingComments = response.data.comments;

    // Find the index of the comment with the specified commentID
    const commentIndex = existingComments.findIndex(comment => comment.commentId === commentID);

    // If the comment with the specified commentID is found, delete it
    if (commentIndex !== -1) {
      existingComments.splice(commentIndex, 1); // Remove the comment from the array

      // Send a PATCH request to update the comments without the deleted comment
      await axios.patch(`${COMMENTS_URL}/${movie_id}`, {
        movie_id: `${movie_id}`,
        comments: existingComments,
      });

      console.log("Comment deleted successfully.");
    } else {
      console.error("Comment not found with commentID:", commentID);
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
};