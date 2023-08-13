import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        main
      </Container>
    </div>
  );
}

export default App;
