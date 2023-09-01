import axios from "axios";

const COMMENTS_URL = "http://localhost:9000/comments";


const createNewMovie = async (movie_id) => {
  try {
    const newMovieData = {
      movie_id: `${movie_id}`,
      comments: [],
    };
    // Use an API endpoint to create a new movie entry with the provided movie_id
    // You may need to adjust this part based on your API or database setup
    await axios.post(`${COMMENTS_URL}`, newMovieData);

    // Optionally, you can log a message or handle success here
    console.log(`New movie with movie_id ${movie_id} created successfully.`);
  } catch (error) {
    console.error("Error creating a new movie:", error);
    throw error; // Optionally, re-throw the error for further handling
  }
};


export const newComment = async (movie_id, comment) => {
  try {
    const newComment = {
      user: "USER",
      comment: comment,
    };

    const response = await axios.get(`${COMMENTS_URL}/${movie_id}`);
    if (response.status === 404) {
      await createNewMovie(movie_id);
      console.log("halo")
    }

    const updatedResponse = await axios.get(`${COMMENTS_URL}/${movie_id}`);
    const existingComments = updatedResponse.data.comments;

    existingComments.push(newComment);

    await axios.patch(`${COMMENTS_URL}/${movie_id}`, {
      movie_id: `${movie_id}`,
      comments: existingComments, // Updated comments array
    });

    console.log("Comment added successfully:", response.data);
    return newComment;
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

export const updateComment = async (movie_id, user, comment) => {
  const updatedComment = {
    user: "user2", // Username to match
    comment: "I still think the storyline is fantastic!",
  };

  axios
    .get(`${COMMENTS_URL}/${movie_id}`)
    .then((response) => {
      const comments = response.data.comments;

      const commentIndex = comments.findIndex(
        (comment) => comment.user === updatedComment.user
      );

      if (commentIndex !== -1) {
        comments[commentIndex].comment = updatedComment.comment;

        axios
          .patch(`${COMMENTS_URL}/${movie_id}`, {
            movie_id: movie_id,
            comments: comments,
          })
          .then((patchResponse) => {
            console.log("Comment updated successfully:", patchResponse.data);
          })
          .catch((patchError) => {
            console.error("Error updating comment:", patchError);
          });
      } else {
        console.log("Comment not found for the specified user.");
      }
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};

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
    console.error("Error fetching movie data:", error);
  }
};