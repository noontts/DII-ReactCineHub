import { Banner } from "./components/Banner";
import Container from "./components/Container";
import PaginatePage from "./pages/PaginateMovie"
import { FavoritePage } from "./pages/FavoritePage"
import { Home } from "./pages/Home"
import { MovieDetail } from "./pages/MovieDetail";
import { Navbar } from "./components/Navbar/"
import React ,{ useState } from "react";
import "./App.css";
import { CommentInput } from "./components/CommentInput";

function App() {

  const [favoriteMovie,setFavoriteMovie] = useState([]);

  const addToFavorites = (isFavorite, movieObj) => {
    if (!isFavorite) {
      removeFromFavorites(movieObj);
    } else {
      addMovieToFavorites(movieObj);
    }
  };

    const addMovieToFavorites = (movieObj) => {
      if (!favoriteMovie.some(movie => movie.id === movieObj.id)) {
        setFavoriteMovie((prevFavorites) => [...prevFavorites, movieObj]);
        console.log(`${movieObj.id} is Add!`);
      }
    };
  
    const removeFromFavorites = (movieObj) => {
      setFavoriteMovie((prevFavorites) =>
        prevFavorites.filter((favoriteMovie) => favoriteMovie.id !== movieObj.id)
      );
      console.log(`${movieObj.id} is Delete!`)
    };

    console.log("Updated favoriteMovie:", favoriteMovie);

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <MovieDetail></MovieDetail>
        {/* <Home addToFavorite={addToFavorites}/> */}
        {/* <PaginatePage pageTitle={'Now Playing'} addToFavorite={addToFavorites}/> */}
        {/* <FavoritePage favoriteMovies={ favoriteMovie }/> */}

      </Container>
    </div>
  );
}

export default App;