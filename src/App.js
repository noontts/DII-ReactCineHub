import { useState } from "react";
import { Banner } from "./components/Banner";
import Container from "./components/Container";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar/"
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;