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
import PaginatePage from "./pages/PaginateMovie";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <ScrollToTop />
      <FavoritesProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/now-playing/:pageNumber" element={<PaginatePage pageTitle={'now-playing'} endpoint={'now_playing'}/>}/> 
          <Route path="/popular/:pageNumber" element={<PaginatePage pageTitle={'popular'} endpoint={'popular'}/>}/>
          <Route path="/top-rate/:pageNumber" element={<PaginatePage pageTitle={'top-rate'} endpoint={'top_rated'}/>}/>
          <Route path="/upcoming/:pageNumber" element={<PaginatePage pageTitle={'upcoming'} endpoint={'upcoming'}/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/top-50/:pageNumber" element={<PaginatePage pageTitle={'top-50'} endpoint={'now_playing'}/>} />
          <Route path="/Favorite" element={<FavoritePage/>}/>
          <Route path="/Logout" />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
      </FavoritesProvider>
    </div>
  <Footer />
  </>
  );
}

export default App;