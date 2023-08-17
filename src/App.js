import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Banner></Banner>
      </Container>
    </div>
  );
}

export default App;
