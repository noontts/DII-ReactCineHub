import Container from "./components/Container";
import { Navbar } from "./components/Navbar"

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
