import { Banner } from "./components/Banner";
import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar />
      <div>search-Result</div>
      <Banner />
      <Container/>
    </div>
  );
}

export default App;
