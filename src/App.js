import React ,{ useState } from "react";
import Container from "./components/Container";
import PaginatePage from "./pages/PaginateMovie"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail'
import ScrollToTop from './components/ScrollToTop'

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
      <ScrollToTop />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/now-playing" /> 
          <Route path="/popular" />
          <Route path="/Top-rate" />
          <Route path="/upcoming" />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/Top-50" />
          <Route path="/Favorite" />
          <Route path="/Logout" />
          <Route path="*" />
        </Routes>
      </Container>
    </div>
  );
}

export default App;