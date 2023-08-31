import React from "react";
import Container from "./components/Container";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail'
import ScrollToTop from './components/ScrollToTop'
import { FavoritesProvider } from "./components/FavoritesContext";
import "./App.css";
import { FavoritePage } from "./pages/FavoritePage";
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop />
      <FavoritesProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/now-playing" /> 
          <Route path="/popular" />
          <Route path="/Top-rate" />
          <Route path="/upcoming" />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/Top-50" />
          <Route path="/Favorite" element={<FavoritePage/>}/>
          <Route path="/Logout" />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
      </FavoritesProvider>
    </div>
  );
}

export default App;