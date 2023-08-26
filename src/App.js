import { useState } from "react";
import { Banner } from "./components/Banner";
import Container from "./components/Container";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar/"
import "./App.css";

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Navbar/>  
      <Banner />
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;