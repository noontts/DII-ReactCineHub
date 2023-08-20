import { useState } from "react";
import { Banner } from "./components/Banner";
import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchBar/SearchResultsList";
import "./App.css";



function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Navbar/>
      <div className="search-bar-container">
          <SearchBar setResults = {setResults}/>
          <SearchResultsList results = {results}/>
      </div>
      
      <Banner />
      <Container/>
    </div>
  );
}

export default App;
