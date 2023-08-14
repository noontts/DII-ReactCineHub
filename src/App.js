import Container from "./components/Container";
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
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
